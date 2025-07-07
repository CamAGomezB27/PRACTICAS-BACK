import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { PrismaService } from '../../prisma/prisma.service';

interface GeoLocationResponse {
  status: 'success' | 'fail';
  country: string;
  regionName: string;
  city: string;
  query: string; // IP
}

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

interface JwtPayload {
  correo: string;
  id_usuario: number;
  nombre: string;
  rol: string;
  esAdmin: boolean;
  esNomina: boolean;
  esJefe: boolean;
  panelTitle: string;
  userRoleTitle: string;
  nombreTienda?: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  private getPanelTitles(rol: string, nombreTienda?: string) {
    const rolLimpio = rol.trim().toLowerCase().replace(/\s+/g, ' ');

    switch (rolLimpio) {
      case 'administrador':
        return {
          panelTitle: 'Panel Adminsitración',
          userRoleTitle: 'Administrador',
        };
      case 'gestor de nomina':
        return {
          panelTitle: 'Panel de Nómina',
          userRoleTitle: 'Gestor de Nómina',
        };
      case 'jefe de tienda':
        return {
          panelTitle: nombreTienda ? `Panel de ${nombreTienda}` : 'Panel Jefe',
          userRoleTitle: nombreTienda
            ? `Jefe de ${nombreTienda}`
            : 'Jefe de Tienda',
        };
      default:
        return {
          panelTitle: 'No disponible',
          userRoleTitle: 'No disponible',
        };
    }
  }

  async validateGoogleToken(googleToken: string): Promise<GoogleUser> {
    const url = `https://oauth2.googleapis.com/tokeninfo?id_token=${googleToken}`;

    try {
      const response = await axios.get<GoogleUser>(url);
      return response.data;
    } catch {
      throw new HttpException(
        'Token de Google inválido',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async getUbicacionDesdeIP(ip: string): Promise<string> {
    try {
      const response = await axios.get<GeoLocationResponse>(
        `http://ip-api.com/json/${ip}`,
      );
      const data: GeoLocationResponse = response.data;

      if (data.status === 'success') {
        return `${data.city}, ${data.country}`;
      } else {
        return 'Ubicación desconocida';
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.warn('No se pudo obtener la ubicación por IP:', error.message);
      } else {
        console.warn(
          'No se pudo obtener la ubicación por IP:',
          JSON.stringify(error),
        );
      }
      return 'Ubicación desconocida';
    }
  }

  async loginWithGoogle(googleToken: string, ip: string) {
    const googleUser = await this.validateGoogleToken(googleToken);
    const user = await this.prisma.usuario.findUnique({
      where: { correo: googleUser.email },
    });

    if (!user)
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);

    const ubicacion = await this.getUbicacionDesdeIP(ip);

    await this.prisma.usuario.update({
      where: { id_usuario: user.id_usuario },
      data: {
        ultima_actividad: new Date(),
        ip_ultima_conexion: ip.toString(),
        ubicacion,
      },
    });

    const userRole = await this.prisma.usuario_rol.findFirst({
      where: { id_usuario: user.id_usuario },
      include: { rol: true },
    });

    if (!userRole || !userRole.rol) {
      throw new HttpException(
        'No tiene permiso para ingresar',
        HttpStatus.FORBIDDEN,
      );
    }

    const rolNombre = userRole.rol.nombre_rol
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');

    const esAdmin = rolNombre === 'administrador';
    const esNomina = rolNombre === 'gestor de nomina';
    const esJefe = rolNombre === 'jefe de tienda';

    let nombreTienda: string | undefined = undefined;
    if (esJefe) {
      const TiendaJefe = await this.prisma.usuario.findUnique({
        where: { id_usuario: user.id_usuario },
        include: {
          usuario_tienda: {
            include: {
              tienda: true,
            },
          },
        },
      });
      nombreTienda = TiendaJefe?.usuario_tienda[0]?.tienda?.nombre_tienda;
    }

    const { panelTitle, userRoleTitle } = this.getPanelTitles(
      userRole.rol.nombre_rol,
      nombreTienda,
    );

    const payload: JwtPayload = {
      correo: user.correo,
      id_usuario: user.id_usuario,
      nombre: user.nombre,
      rol: userRole.rol.nombre_rol,
      esAdmin,
      esNomina,
      esJefe,
      panelTitle,
      userRoleTitle,
      nombreTienda,
    };

    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    const token = this.jwtService.sign(payload, { secret: jwtSecret });

    console.log('🧩 Rol limpio: ', rolNombre);
    console.log('Nombre que devuelve backend: ', user.nombre);
    console.log('Tienda Asignada: ', nombreTienda);
    console.log('Titulo Generado: ', panelTitle);
    console.log('Playload JWT que se genera: ', payload);

    return {
      token,
      user: {
        nombre: user.nombre,
        correo: user.correo,
        id_usuario: user.id_usuario,
        rol: userRole.rol.nombre_rol,
        esAdmin,
        esNomina,
        esJefe,
        panelTitle,
        userRoleTitle,
        nombreTienda,
      },
    };
  }

  async getProfile(id_usuario: number) {
    const user = await this.prisma.usuario.findUnique({
      where: { id_usuario },
      include: {
        usuario_rol: {
          include: { rol: true },
        },
        usuario_tienda: {
          include: { tienda: true },
        },
      },
    });

    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const rol = user.usuario_rol[0]?.rol?.nombre_rol ?? '';
    const rolLimpio = rol.trim().toLowerCase().replace(/\s+/g, ' ');
    const esJefe = rolLimpio === 'jefe de tienda';
    const esAdmin = rolLimpio === 'administrador';
    const esNomina = rolLimpio === 'gestor de nomina';

    const nombreTienda = esJefe
      ? user.usuario_tienda?.[0]?.tienda?.nombre_tienda
      : undefined;

    const { panelTitle, userRoleTitle } = this.getPanelTitles(
      rol,
      nombreTienda,
    );

    return {
      nombre: user.nombre,
      correo: user.correo,
      id_usuario: user.id_usuario,
      rol,
      esAdmin,
      esNomina,
      esJefe,
      panelTitle,
      userRoleTitle,
      nombreTienda,
    };
  }
}
