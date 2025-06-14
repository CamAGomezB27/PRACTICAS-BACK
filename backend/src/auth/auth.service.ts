import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config';

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

// JWT Payload expandido con todos los campos necesarios
interface JwtPayload {
  correo: string;
  id_usuario: number;
  nombre: string;
  rol: string;
  esAdmin: boolean;
  esNomina: boolean;
  esJefe: boolean;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

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

  async loginWithGoogle(googleToken: string): Promise<{
    token: string;
    user: {
      nombre: string;
      correo: string;
      id_usuario: number;
      rol: string | null;
      esAdmin: boolean;
      esNomina: boolean;
      esJefe: boolean;
    };
  }> {
    const googleUser = await this.validateGoogleToken(googleToken);

    const user = await this.prisma.usuario.findUnique({
      where: { correo: googleUser.email },
    });

    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const userRole = await this.prisma.usuario_rol.findFirst({
      where: { id_usuario: user.id_usuario },
      include: { rol: true },
    });

    //Sin rol no se da ingreso
    if (!userRole || !userRole.rol) {
      throw new HttpException(
        'No tiene permiso para ingresar',
        HttpStatus.FORBIDDEN,
      );
    }

    //Nombre del rol si existe
    const rolNombre = userRole.rol.nombre_rol
      .trim()
      .toLowerCase()
      .replace(/\s+/g, ' ');

    const esAdmin = rolNombre === 'administrador';
    const esNomina = rolNombre === 'gestor de nomina';
    const esJefe = rolNombre === 'jefe de tienda';

    // JWT Payload con TODOS los campos necesarios
    const payload: JwtPayload = {
      correo: user.correo,
      id_usuario: user.id_usuario,
      nombre: user.nombre, // ← AGREGADO
      rol: userRole.rol.nombre_rol, // ← AGREGADO
      esAdmin, // ← AGREGADO
      esNomina, // ← AGREGADO
      esJefe, // ← AGREGADO
    };

    // Accedemos a JWT_SECRET
    const jwtSecret = this.configService.get<string>('JWT_SECRET');
    const token = this.jwtService.sign(payload, {
      secret: jwtSecret,
    });

    console.log('🧩 Rol limpio:', rolNombre);
    console.log('Nombre que devuelve backend:', user.nombre);
    console.log('Playload JWT que se genera:', payload); // ← Para verificar

    return {
      token,
      user: {
        nombre: user.nombre,
        correo: user.correo,
        id_usuario: user.id_usuario,
        rol: userRole.rol.nombre_rol, // nombre original sin modificar
        esAdmin,
        esNomina,
        esJefe,
      },
    };
  }
}
