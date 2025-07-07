// src/usuario/controllers/usuario.controller.ts
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from '../services/usuario.service';

interface CrearUsuarioInput {
  nombre: string;
  correo: string;
  rol: string;
  tienda?: string; // solo si aplica
}

interface EditarUsuario {
  nuevoRolId: number;
  idTienda?: number;
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

  //editar por ID
  @Put(':id/editar')
  async editarUsuario(@Param('id') id: string, @Body() body: EditarUsuario) {
    return this.usuarioService.editarUsuario(+id, body);
  }

  @Delete(':id/eliminar')
  async eliminarUsuario(@Param('id') id: string) {
    return this.usuarioService.eliminarUsuario(+id);
  }

  @Patch(':id/desactivar')
  async desactivarUsuario(@Param('id') id: string) {
    return this.usuarioService.desactivarUsuario(+id);
  }
}
