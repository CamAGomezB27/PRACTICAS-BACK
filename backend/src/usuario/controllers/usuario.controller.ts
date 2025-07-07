// src/usuario/controllers/usuario.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // Verifica si un correo ya está registrado
  @Get(':email/validar')
  async validarEmail(@Param('email') email: string) {
    return this.usuarioService.validarEmail(email);
  }

  // Obtener usuario por ID
  @Get(':id')
  async findByID(@Param('id') id: string) {
    return this.usuarioService.findById(+id);
  }

  // Crear un nuevo usuario
  @Post()
  async crearUsuario(@Body() body: any) {
    return this.usuarioService.crearUsuario(body); // <-- Quitamos el punto que estaba mal
  }

  // Obtener lista de roles
  @Get()
  async obtenerRolesYTiendas() {
    return this.usuarioService.obtenerRolesYTiendas();
  }
}
