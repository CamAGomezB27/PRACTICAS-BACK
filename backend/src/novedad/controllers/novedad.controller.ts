import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { PrismaService } from 'prisma/prisma.service';
import { getMensajePorEstadoBackendPorId } from 'src/utils/getMensajePorEstado';
import { NovedadeService } from '../services/novedad.service';

interface JwtPayload {
  id_usuario: number;
  esJefe: boolean;
}

interface AuthenticatedRequest extends Request {
  user: {
    correo: string;
    id_usuario: number;
    nombre: string;
    rol: string;
    esAdmin: boolean;
    esJefe: boolean;
    esNomina: boolean;
    panelTitle: string;
    userRoleTitle: string;
    nombreTienda?: string;
    iat: number;
  };
}

interface FiltrosTienda {
  tipo?: string;
  fecha?: {
    gte?: Date;
    lte?: Date;
  };
  estado?: string;
  cedula?: number;
}

interface FiltrosParaNomina {
  tienda?: string;
  tipo?: string;
  fecha?: {
    gte?: Date;
    lte?: Date;
  };
  cedula?: number;
}

interface RespuestaIndividual {
  respuesta_validacion: string;
  responsable_validacion: string;
  ajuste: string;
  fecha_pago: string;
  area_responsable: string;
  categoria_inconsistencia: string;
}

interface DetalleIndividual {
  id_novedad: number;
  tipo: string;
  estado: string;
  tienda: string;
  fecha: Date | null;
  cedula: string;
  nombre: string;
  detalle: string;
  jornada_actual: string;
  nueva_jornada: string;
  salario_actual: number;
  nuevo_salario: number;
  fecha_inicio: Date | null;
  fecha_fin: Date | null;
  consecutivo: string;
  respuesta: string;
  validacion: string;
  ajuste: boolean;
  fecha_pago: Date | null;
  area_responsable: string;
  categoria_inconsistencia: string;
  responsable_validacion: string;
  concepto: string;
  codigo_concepto: number | null;
  unidades: number | null;
  fecha_novedad: Date | null;
  fecha_inicio_disfrute: Date | null;
  fecha_fin_disfrute: Date | null;
  dias: number;
}

@Controller('novedad')
@UseGuards(AuthGuard('jwt'))
export class NovedadController {
  constructor(
    private readonly novedadService: NovedadeService,
    private readonly prisma: PrismaService,
  ) {}

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

  @Post('individual')
  async crearIndividual(
    @Body()
    body: {
      cedula: number;
      nombre: string;
      titulo: string;
      tienda?: string;
      jefe?: string;
      detalle: string;
      fecha?: string;
    },
    @Req()
    req: Request & {
      user: {
        id_usuario: number;
        nombre: string;
        correo: string;
        esJefe: boolean;
        esNomina: boolean;
        nombreTienda: string;
      };
    },
  ) {
    return this.novedadService.crearNovedadIndividual(body, req.user);
  }

  @Get(':id/masiva')
  async obtenerDetalleMasivo(@Param('id') id: string) {
    return this.novedadService.obtenerDetalleMasivo(+id);
  }

  @Get(':id/individual')
  async obtenerDetalleIndividual(
    @Param('id') id: string,
  ): Promise<DetalleIndividual> {
    return this.novedadService.obtenerDetalleIndividual(+id);
  }

  @Get('masiva/tienda')
  async obtenerConsolidadoPorTienda(
    @Req() req: Request,
    @Query('tipo') tipo?: string,
    @Query('desde') desde?: string,
    @Query('hasta') hasta?: string,
    @Query('cedula') cedula?: string,
  ) {
    const { id_usuario } = req.user as JwtPayload;

    const filtros: FiltrosTienda = {};

    if (tipo) filtros.tipo = tipo;
    if (cedula && !isNaN(Number(cedula))) {
      filtros.cedula = Number(cedula);
    }
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

  @Get('masiva/cedulas-sugeridas')
  async obtenerCedulasSugeridas(
    @Req() req: AuthenticatedRequest,
    @Query('q') q?: string,
  ) {
    const { nombreTienda, esNomina } = req.user;
    return this.novedadService.buscarCedulas(q, nombreTienda, esNomina);
  }

  @Get('novedades-pendientes')
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

  @Get('todas-las-novedades')
  async obtenerTodasLasNovedades(
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

    return this.novedadService.obtenerTodasNovedadesParaNomina(filtros);
  }

  @Get('consolidado-nomina')
  async obtenerConsolidadoCompleto(
    @Query('tienda') tienda: string,
    @Query('tipo') tipo: string,
    @Query('desde') desde: string,
    @Query('hasta') hasta: string,
    @Query('cedula') cedula: string,
  ) {
    const filtros: FiltrosParaNomina = {};

    if (tienda) filtros.tienda = tienda;
    if (tipo) filtros.tipo = tipo;
    if (cedula && !isNaN(Number(cedula))) {
      filtros.cedula = Number(cedula);
    }

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

    return this.novedadService.obtenerDetallesParaConsolidado(filtros);
  }

  @Get('consolidado-pendientes-nomina')
  async obtenerNovedadesPendientes(
    @Query('tienda') tienda: string,
    @Query('tipo') tipo: string,
    @Query('desde') desde: string,
    @Query('hasta') hasta: string,
    @Query('cedula') cedula: string,
  ) {
    const filtros: FiltrosParaNomina = {};

    if (tienda) filtros.tienda = tienda;
    if (tipo) filtros.tipo = tipo;
    if (cedula && !isNaN(Number(cedula))) {
      filtros.cedula = Number(cedula);
    }

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

    return this.novedadService.obtenerDetallesPendientesParaNomina(filtros);
  }

  @Put(':id/cambiar-estado')
  async cambiarEstado(
    @Param('id') id: string,
    @Body() body: { nuevoEstadoId: number },
    @Req() req: Request,
  ) {
    const { id_usuario, esJefe } = req.user as JwtPayload;
    const idNovedad = parseInt(id, 10);

    // Generar mensaje dinámico según rol y estado
    const descripcion = getMensajePorEstadoBackendPorId(body.nuevoEstadoId, {
      esNomina: !esJefe,
      esJefe: esJefe,
    });

    return this.novedadService.cambiarEstadoNovedad(
      idNovedad,
      body.nuevoEstadoId,
      id_usuario,
      descripcion,
    );
  }

  @Put('cambiar-estados-respuesta-masiva')
  async cambiarEstadosMasivo(
    @Body()
    body: {
      idsNovedades: number[];
      nuevoEstadoId: number;
    },
    @Req() req: Request,
  ) {
    const { id_usuario, esJefe } = req.user as JwtPayload;
    return this.novedadService.cambiarMultiplesEstados(
      body.idsNovedades,
      body.nuevoEstadoId,
      id_usuario,
      !esJefe, // esTienda
    );
  }

  @Get('validar-duplicado')
  async validarDuplicado(
    @Query('cedula') cedula: number,
    @Query('fecha') fecha: string,
    @Query('tipo') tipo: string,
  ) {
    console.log('🔍 [CONTROLLER] Validando duplicado:', {
      cedula,
      fecha,
      tipo,
    });

    try {
      const existe = await this.novedadService.existeDuplicadoRobusto({
        cedula,
        fecha,
        tipo,
      });

      console.log('🔍 [CONTROLLER] Resultado validación:', { existe });

      return {
        existe,
        mensaje: existe
          ? `Ya existe una novedad con cédula ${cedula}, fecha ${fecha} y tipo ${tipo}`
          : 'No existe duplicado',
      };
    } catch (error) {
      console.error('❌ [CONTROLLER] Error validando duplicado:', error);
      return {
        existe: false,
        mensaje: 'Error al validar duplicado',
      };
    }
  }

  @Put('guardar-respuesta-individual/:idNovedad')
  async guardarRespuestaIndividual(
    @Param('idNovedad') idNovedad: number,
    @Body() body: RespuestaIndividual,
  ) {
    const detalle = await this.prisma.detalleNovedadMasiva.findFirst({
      where: {
        id_novedad: Number(idNovedad),
        novedad: {
          id_estado_novedad: 2, // EN GESTIÓN
        },
      },
      include: { novedad: true },
    });

    if (!detalle) {
      throw new BadRequestException(
        '❌ No se encontró el detalle para esta novedad o no está en gestión.',
      );
    }

    // 🔍 Validación segura de la fecha
    let fechaPagoValida: Date | null = null;

    if (body.fecha_pago) {
      const parsed = Date.parse(body.fecha_pago);
      if (!isNaN(parsed)) {
        fechaPagoValida = new Date(parsed);
      } else {
        throw new BadRequestException('❌ La fecha de pago no es válida.');
      }
    }

    await this.prisma.detalleNovedadMasiva.update({
      where: { id_detalle: detalle.id_detalle },
      data: {
        respuesta_validacion: body.respuesta_validacion,
        responsable_validacion: body.responsable_validacion,
        ajuste: body.ajuste,
        fecha_pago: fechaPagoValida,
        area_responsable: body.area_responsable,
        categoria_inconsistencia: body.categoria_inconsistencia,
      },
    });

    // ✅ Verifica si todas las respuestas ya están diligenciadas
    const detalles = await this.prisma.detalleNovedadMasiva.findMany({
      where: { id_novedad: Number(idNovedad) },
    });

    const todosCompletos = detalles.every(
      (d) => d.respuesta_validacion && d.respuesta_validacion.trim() !== '',
    );

    if (todosCompletos) {
      await this.prisma.novedad.update({
        where: { id_novedad: Number(idNovedad) },
        data: { id_estado_novedad: 3 },
      });
    }

    return { mensaje: '✅ Respuesta guardada exitosamente' };
  }
}
