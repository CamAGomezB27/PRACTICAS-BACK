import {
  Controller,
  Get,
  Post,
  Body,
  Req,
  UseGuards,
  Param,
} from '@nestjs/common';
import { Request } from 'express';
import { NovedadeService } from '../services/novedad.service';
import { AuthGuard } from '@nestjs/passport';

interface JwtPayload {
  id_usuario: number;
  esJefe: boolean;
}

@Controller('novedad')
@UseGuards(AuthGuard('jwt'))
export class NovedadController {
  constructor(private readonly novedadService: NovedadeService) {}

  @Get()
  async obtenerNovedades(@Req() req: Request) {
    const { id_usuario, esJefe } = req.user as JwtPayload;
    return this.novedadService.obtenerNovedadesUsuarios(id_usuario, esJefe);
  }

  @Post()
  create(
    @Body()
    body: {
      idUsuario: number;
      descripcion: string;
      idEstado: number;
      idTipoNovedad?: number;
      esMasiva?: boolean;
      cantidadSolicitudes?: number;
    },
  ) {
    return this.novedadService.crearNovedad(body);
  }

  @Get(':id/masiva')
  async obtenerDetalleMasivo(@Param('id') id: string) {
    return this.novedadService.obtenerDetalleMasivo(+id);
  }
}
