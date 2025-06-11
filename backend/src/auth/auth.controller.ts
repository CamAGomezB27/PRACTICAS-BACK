// src/auth/auth.controller.ts

import {
  Controller,
  Post,
  Body,
  Res,
  Get,
  UseGuards,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service'; // Importa el AuthService
import { Response } from 'express';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsuarioService } from 'src/usuario/services/usuario.service';

// Tipo Request para 'user'
interface AuthenticatedRequest extends Request {
  user: {
    nombre: string;
    correo: string;
    id_usuario: number;
    esAdmin: boolean;
    esJefe: boolean;
    esNomina: boolean;
  };
}
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usuarioService: UsuarioService,
  ) {}

  //login con Google
  @Post('google')
  async loginWithGoogle(
    @Body('token') googleToken: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { token, user } = await this.authService.loginWithGoogle(googleToken);

    response.cookie('jwt', token, {
      httpOnly: true,
      secure: false, //localhost
      maxAge: 1000 * 60 * 60 * 24, //Tiempo token
      sameSite: 'lax',
      path: '/',
    });

    return {
      message: 'Inicio de sesión exitoso',
      user,
    };
  }

  //Obtener perfil del usuario
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Req() req: AuthenticatedRequest) {
    const { id_usuario } = req.user;

    const usuarioDB = await this.usuarioService.findById(id_usuario);

    if (!usuarioDB) {
      return {
        message: 'Usuario no encontrado',
      };
    }

    const rol = usuarioDB?.usuario_rol[0]?.rol.nombre_rol;

    return {
      message: 'Perfil cargado correctamente',
      user: {
        nombre: usuarioDB?.nombre,
        correo: usuarioDB?.correo,
        id_usuario: usuarioDB?.id_usuario,
        rol,
        esAdmin: rol === 'Administrador',
        esNomina: rol === 'Nómina',
        esJefe: rol === 'Jefe',
      },
    };
  }

  //LogOut Elimina cookie
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Sesión cerrdad correctamente' };
  }
}
