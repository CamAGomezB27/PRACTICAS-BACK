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
  constructor(private readonly authService: AuthService) {}

  //login con Google
  @Post('google')
  async loginWithGoogle(
    @Body('token') googleToken: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { token, user } = await this.authService.loginWithGoogle(googleToken);

    response.cookie('jwt', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // seguro en producción
      maxAge: 1000 * 60 * 60 * 24, //1 dia
      sameSite: 'lax',
    });

    return {
      message: 'Inicio de sesión exitoso',
      user,
    };
  }

  //Obtener perfil del usuario
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Req() req: AuthenticatedRequest) {
    return {
      message: 'Perfil cargado correctamente',
      user: req.user,
    };
  }

  //LogOut Elimina cookie
  @Post('logout')
  logout(@Res({ passthrough: true }) res: Response) {
    res.clearCookie('jwt');
    return { message: 'Sesión cerrdad correctamente' };
  }
}
