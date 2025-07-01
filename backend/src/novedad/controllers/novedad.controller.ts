import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { NovedadeService } from '../services/novedad.service';

interface JwtPayload {
  id_usuario: number;
  esJefe: boolean;
}

interface FiltrosTienda {
  tipo?: string;
  fecha_novedad?: {
    gte?: Date;
    lte?: Date;
  };
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

  @Get('masiva/tienda')
  async obtenerConsolidadoPorTienda(
    @Req() req: Request,
    @Query('tipo') tipo?: string,
    @Query('desde') desde?: string,
    @Query('hasta') hasta?: string,
  ) {
    const { id_usuario } = req.user as JwtPayload;

    const filtros: FiltrosTienda = {};

    if (tipo) filtros.tipo = tipo;
    if (desde || hasta) {
      const gte = desde ? new Date(desde) : undefined;
      const lte = hasta ? new Date(hasta) : undefined;

      // Validar que al menos una fecha sea válida
      const isValidGte = gte && !isNaN(gte.getTime());
      const isValidLte = lte && !isNaN(lte.getTime());

      if (isValidGte || isValidLte) {
        filtros.fecha_novedad = {};
        if (isValidGte) filtros.fecha_novedad.gte = gte!;
        if (isValidLte) filtros.fecha_novedad.lte = lte!;
      }
    }

    return this.novedadService.obtenerDetalleMasivoPorTienda(
      id_usuario,
      filtros,
    );
  }

  @Get('todas')
  async obtenerTodasLasNovedades(
    @Query('tienda') tienda?: string,
    @Query('tipo') tipo?: string,
    @Query('desde') desde?: string,
    @Query('hasta') hasta?: string,
  ) {
    return this.novedadService.obtenerTodasNovedadesFiltradas({
      tienda,
      tipo,
      desde,
      hasta,
    });
  }
}
