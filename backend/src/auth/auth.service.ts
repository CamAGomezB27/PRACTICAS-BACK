import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import axios from 'axios';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigService } from '@nestjs/config'; // Importar ConfigService
import { Prisma } from '@prisma/client';

interface GoogleUser {
  email: string;
  name: string;
  picture: string;
}

interface JwtPayload {
  correo: string;
  id_usuario: number;
}

// Tipos inferidos de Prisma
type Usuario = Prisma.usuarioGetPayload<true>;
type UsuarioRolConRol = Prisma.usuario_rolGetPayload<{
  include: { rol: true };
}>;

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService, // Inyectado aquí
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

  async loginWithGoogle(googleToken: string): Promise<{ token: string }> {
    const googleUser = await this.validateGoogleToken(googleToken);

    const user: Usuario | null = await this.prisma.usuario.findUnique({
      where: { correo: googleUser.email },
    });

    if (!user) {
      throw new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND);
    }

    const userRole: UsuarioRolConRol | null =
      await this.prisma.usuario_rol.findFirst({
        where: { id_usuario: user.id_usuario },
        include: { rol: true },
      });

    const rolesPermitidos = ['Administrador']; // Agrega más si necesitas

    if (
      !userRole ||
      !userRole.rol ||
      !rolesPermitidos.includes(userRole.rol.nombre_rol)
    ) {
      throw new HttpException('Acceso denegado', HttpStatus.FORBIDDEN);
    }

    const payload: JwtPayload = {
      correo: user.correo,
      id_usuario: user.id_usuario,
    };

    // Accedemos a JWT_SECRET dentro del método y firmamos el token
    const jwtSecret = this.configService.get<string>('JWT_SECRET'); // Acceder a la variable de entorno
    const token = this.jwtService.sign(payload, {
      secret: jwtSecret, // Aquí estamos pasando el secreto del .env
    });

    return { token };
  }
}
