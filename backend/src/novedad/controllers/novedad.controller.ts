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
  fecha?: {
    gte?: Date;
    lte?: Date;
  };
}

interface FiltrosParaNomina {
  tienda?: string;
  tipo?: string;
  fecha?: {
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

      function obtenerFinDelDiaEnUTC(fecha: string): Date {
        const soloFecha = fecha.split('T')[0]; // ← corta antes de la "T"
        const partes = soloFecha.split('-');

        if (partes.length !== 3)
          throw new Error(`Formato de fecha inválido: ${fecha}`);

        const [año, mes, dia] = partes.map(Number);
        const fechaLocal = new Date(año, mes - 1, dia, 23, 59, 59, 999);

        if (isNaN(fechaLocal.getTime())) {
          throw new Error(`Fecha inválida construida: ${fecha}`);
        }

        return fechaLocal;
      }

      const lte = hasta ? obtenerFinDelDiaEnUTC(hasta) : undefined;

      // Validar que al menos una fecha sea válida
      const isValidGte = gte && !isNaN(gte.getTime());
      const isValidLte = lte && !isNaN(lte.getTime());

      if (isValidGte || isValidLte) {
        filtros.fecha = {};
        if (isValidGte) filtros.fecha.gte = gte!;
        if (isValidLte) filtros.fecha.lte = lte!;
      }
    }

    return this.novedadService.obtenerDetalleMasivoPorTienda(
      id_usuario,
      filtros,
    );
  }

  @Get('todas')
  async obtenerTodasPendientes(
    @Query('tienda') tienda?: string,
    @Query('tipo') tipo?: string,
    @Query('desde') desde?: string,
    @Query('hasta') hasta?: string,
  ) {
    const filtros: FiltrosParaNomina = {};

    if (tienda) filtros.tienda = tienda;
    if (tipo) filtros.tipo = tipo;

    if (desde || hasta) {
      const gte = desde ? new Date(desde) : undefined;
      const lte = hasta ? new Date(hasta) : undefined;

      if (gte && !isNaN(gte.getTime())) {
        filtros.fecha = { ...filtros.fecha, gte };
      }

      if (lte && !isNaN(lte.getTime())) {
        filtros.fecha = {
          ...filtros.fecha,
          lte: new Date(
            lte.getFullYear(),
            lte.getMonth(),
            lte.getDate(),
            23,
            59,
            59,
            999,
          ),
        };
      }
    }

    return this.novedadService.obtenerNovedadesPendientesParaNomina(filtros);
  }

  @Get('consolidado-nomina')
  async obtenerConsolidadoCompleto(
    @Query('tienda') tienda: string,
    @Query('tipo') tipo: string,
    @Query('desde') desde: string,
    @Query('hasta') hasta: string,
  ) {
    const filtros: FiltrosParaNomina = {};

    if (tienda) filtros.tienda = tienda;
    if (tipo) filtros.tipo = tipo;

    if (desde || hasta) {
      filtros.fecha = {};
      if (desde) filtros.fecha.gte = new Date(desde);
      if (hasta) filtros.fecha.lte = new Date(hasta);
    }

    return this.novedadService.obtenerDetallesParaConsolidado(filtros);
  }
}
