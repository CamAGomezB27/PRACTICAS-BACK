import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsuarioService } from 'src/usuario/services/usuario.service';
import { PrismaService } from 'prisma/prisma.service';

interface AuthenticatedRequest extends Request {
  user: {
    correo: string;
    id_usuario: number;
    nombre: string;
    rol: string;
    esAdmin: boolean;
    esJefe: boolean;
    esNomina: boolean;
    panelTitle: string;
    userRoleTitle: string;
    nombreTienda?: string;
    iat: number;
  };
}

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usuarioService: UsuarioService,
    private readonly prisma: PrismaService,
  ) {}

  // Login con Google
  @Post('google')
  async loginWithGoogle(
    @Body('token') googleToken: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { token, user } = await this.authService.loginWithGoogle(googleToken);

    response.cookie('jwt', token, {
      httpOnly: true,
      secure: false, // localhost
      maxAge: 1000 * 60 * 60 * 24,
      sameSite: 'lax',
      path: '/',
    });

    return {
      message: 'Inicio de sesión exitoso',
      user,
    };
  }

  // Obtener perfil del usuario desde el AuthService
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req: AuthenticatedRequest) {
    const { id_usuario } = req.user;

    const user = await this.authService.getProfile(id_usuario);

    if (!user) {
      return {
        message: 'Usuario no encontrado',
      };
    }

    return {
      message: 'Perfil cargado correctamente',
      user,
    };
  }

  // Logout
  @Post('logout')
  @UseGuards(JwtAuthGuard)
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt', {
      httpOnly: true,
      sameSite: 'lax',
      secure: false,
      path: '/',
    });
    return { message: 'Sesión cerrada correctamente' };
  }
}
