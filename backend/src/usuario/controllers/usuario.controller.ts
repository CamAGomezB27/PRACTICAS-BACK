// src/usuario/controllers/usuario.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

interface CrearUsuarioInput {
  nombre: string;
  correo: string;
  rol: string;
  tienda?: string; // solo si aplica
}

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  // Crear usuario
  @Post()
  async crearUsuario(@Body() body: CrearUsuarioInput) {
    return this.usuarioService.crearUsuario(body);
  }

  //todos los usuarios
  @Get('listar')
  async listarUsuarios() {
    return this.usuarioService.listarUsuarios();
  }

  //  Obtener usuario por ID
  @Get(':id')
  async findByID(@Param('id') id: string) {
    return this.usuarioService.findById(+id);
  }

  // Verificar si email ya existe
  @Get(':email/validar')
  async validarEmail(@Param('email') email: string) {
    return this.usuarioService.validarEmail(email);
  }

  // Obtener roles y tiendas
  @Get()
  async obtenerRolesYTiendas() {
    return this.usuarioService.obtenerRolesYTiendas();
  }
}
