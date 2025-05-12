// src/auth/auth.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service'; // Importa el AuthService

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Endpoint para login con Google
  @Post('google')
  async loginWithGoogle(@Body('token') googleToken: string) {
    return this.authService.loginWithGoogle(googleToken);
  }
}
