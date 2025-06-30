import { Controller, Get } from '@nestjs/common';
import { TiendaService } from '../service/tienda.service';

@Controller('tiendas')
export class TiendaController {
  constructor(private readonly tiendaService: TiendaService) {}

  @Get()
  obtenerTodas() {
    return this.tiendaService.obtenerTiendas();
  }
}
