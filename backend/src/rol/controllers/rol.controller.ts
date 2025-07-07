// src/modules/rol/controller/rol.controller.ts
import { Controller, Get } from '@nestjs/common';
import { RolService } from '../services/rol.service';

@Controller('roles')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Get()
  obtenerTodos() {
    return this.rolService.obtenerRoles();
  }
}
