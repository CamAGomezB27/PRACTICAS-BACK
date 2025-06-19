import { Controller, Get, Post, Body } from '@nestjs/common';
import { NovedadeService } from '../services/novedad.service';

@Controller('novedad')
export class NovedadController {
  constructor(private readonly novedadService: NovedadeService) {}

  @Get()
  getAll() {
    return this.novedadService.obtenerNovedades();
  }
}
