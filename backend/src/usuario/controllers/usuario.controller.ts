import { Controller, Get, Param } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get(':email/validar')
  async validarEmail(@Param('email') email: string) {
    return this.usuarioService.validarEmail(email);
  }
}
