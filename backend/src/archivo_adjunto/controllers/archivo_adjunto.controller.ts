import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Req,
  Res,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Request, Response } from 'express';
import { memoryStorage } from 'multer';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { NovedadeService } from 'src/novedad/services/novedad.service';
import {
  ArchivoAdjuntoService,
  SolicitudConIdDetalle,
} from '../services/archivo_adjunto.service';

// Request extendido con user
interface AuthenticatedRequest extends Request {
  user: {
    nombre: string;
    correo: string;
    id_usuario: number;
    esJefe: boolean;
    nombreTienda: string;
  };
}

// Body del archivo subido
interface ArchivoSubido {
  titulo: string;
  tipo: string;
  nombreUsuario: string;
  nombreTienda: string;
}

// Resultado de validación
interface ResultadoValidacion {
  valido: boolean;
  errores?: string[];
  cantidadSolicitudes?: number;
}

interface FilaParaExportar {
  id: number;
  numero: number;
  fecha: string;
  cedula: string;
  nombre: string;
  categoria: string;
  tienda: string;
  jefe: string;
  detalle: string;
  jornadaEmAc: string;
  jornadaOtrSiTem: string;
  fechainicio: string;
  fechafin: string;
  salarioActual: number;
  salarioOtroSiTemp: number;
  consForms: string;
  concepto: string;
  codigo: number;
  unidades: number;
  fechaNove: string;
  fechInicioDisfrute: string;
  fechaFinDisfrute: string;
  ResponsableValidacion: string;
  RespuestaValidacion: string;
  ajuste: string;
  Fechapago: string;
  AreaRespon: string;
  CategInconsitencia: string;
}

@Controller('archivo-adjunto')
export class ArchivoAdjuntoController {
  constructor(
    private readonly archivoAdjuntoService: ArchivoAdjuntoService,
    private readonly novedadService: NovedadeService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('descargar-plantilla')
  async descargarPlantilla(
    @Req() req: AuthenticatedRequest,
    @Res() res: Response,
    @Query('titulo') titulo: string,
    @Query('cantidad') cantidad: string,
  ) {
    try {
      const cantidadNum = parseInt(cantidad, 10);
      if (isNaN(cantidadNum) || cantidadNum <= 0) {
        return res
          .status(400)
          .json({ message: 'La cantidad debe ser un número positivo' });
      }

      const nombreUsuario = req.user?.nombre || 'Nombre no disponible';
      const nombreTienda = req.user?.nombreTienda || 'Tienda no disponible';

      const buffer = await this.archivoAdjuntoService.generarPlantillaExcel(
        titulo,
        nombreUsuario,
        nombreTienda,
        cantidadNum,
      );

      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      );
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=plantilla_solicitud.xlsx',
      );

      res.send(buffer);
    } catch (error) {
      res.status(500).json({
        message: 'No se pudo generar la plantilla',
        error: error instanceof Error ? error.stack : String(error),
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('subir-archivo')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: memoryStorage(),
      limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(xlsx)$/)) {
          cb(null, true);
        } else {
          cb(new Error('Solo se permiten archivos .xlsx'), false);
        }
      },
    }),
  )
  async subirArchivo(
    @UploadedFile() archivo: Express.Multer.File,
    @Req() req: AuthenticatedRequest,
    @Body() body: ArchivoSubido,
  ): Promise<any> {
    try {
      console.log('📄 Archivo recibido:', archivo);

      const titulo = body.titulo;
      const tipo = body.tipo;
      const nombreArchivo = archivo.originalname;

      //NOMBRE DEL ARCHIVO ASIGNADO POR EL FROTEND
      const regexNombreValido = new RegExp(
        `^Plantilla_${titulo}( \\(\\d+\\))?\\.xlsx$`,
      );

      if (!regexNombreValido.test(nombreArchivo)) {
        console.warn(
          `❌ Nombre de archivo inválido. Se esperaba algo como: Plantilla_${titulo}.xlsx, pero llegó: ${nombreArchivo}`,
        );
        return {
          valido: false,
          errores: [
            `Debes subir un archivo llamado "Plantilla_${titulo}.xlsx" o versiones como "Plantilla_${titulo} (1).xlsx".`,
            `Archivo recibido: "${nombreArchivo}".`,
          ],
        };
      }

      const validacion: ResultadoValidacion =
        await this.archivoAdjuntoService.validarArchivoBufferConMicroservicio(
          archivo.buffer,
          tipo,
          titulo,
          req.user.nombre,
          req.user.nombreTienda,
        );

      console.log('🧪 Resultado de validación:', validacion);

      if (!validacion.valido) {
        console.log('🛑 Archivo con errores. Cancelando guardado.');
        return {
          valido: false,
          errores: validacion.errores,
        };
      }

      const cantidad = validacion.cantidadSolicitudes ?? 0;

      const mapaTiposNovedad: Record<string, number> = {
        'Auxilio de transporte': 1,
        'Horas Extra': 2,
        Vacaciones: 3,
        'Otro Si Temporal': 4,
        'Otro Si Definitivo': 5,
        Descuento: 6,
        Otros: 7,
      };

      const idTipoNovedad = mapaTiposNovedad[titulo] ?? null;

      const novedad = await this.novedadService.crearNovedad({
        idUsuario: req.user.id_usuario,
        descripcion: `✅ Archivo cargado. En espera de validación por Nómina.`,
        idEstado: 1,
        idTipoNovedad,
        esMasiva: true,
        cantidadSolicitudes: cantidad,
      });

      await this.archivoAdjuntoService.procesarYGuardarExcel(
        archivo.buffer,
        novedad.id_novedad,
      );

      return {
        valido: true,
        message: '✅ Archivo subido y procesado correctamente',
        usuario: req.user.nombre,
        novedadId: novedad.id_novedad,
        cantidadProcesada: cantidad,
      };
    } catch (error) {
      console.error('❌ Error al subir y procesar archivo:', error);
      return {
        valido: false,
        message: 'No se pudo subir el archivo',
        error: error instanceof Error ? error.stack : String(error),
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('exportar-consolidado')
  async exportarConsolidadoDesdeDatos(
    @Body() datos: SolicitudConIdDetalle[],
    @Res() res: Response,
  ) {
    try {
      if (!datos || datos.length === 0) {
        return res
          .status(400)
          .json({ message: 'No se recibieron datos para exportar' });
      }

      console.log('🟡 Datos recibidos del frontend:');
      console.log(datos.map((d) => ({ id: d.id_novedad, fecha: d.fecha })));

      const solicitudes: SolicitudConIdDetalle[] = datos.map((d) => ({
        ...d,
        fecha:
          d.fecha && typeof d.fecha === 'string' && d.fecha.trim() !== ''
            ? d.fecha
            : '-',
        fecha_inicio: d.fecha_inicio ? new Date(d.fecha_inicio) : null,
        fecha_fin: d.fecha_fin ? new Date(d.fecha_fin) : null,
        fecha_novedad: d.fecha_novedad ? new Date(d.fecha_novedad) : null,
        fecha_inicio_disfrute: d.fecha_inicio_disfrute
          ? new Date(d.fecha_inicio_disfrute)
          : null,
        fecha_fin_disfrute: d.fecha_fin_disfrute
          ? new Date(d.fecha_fin_disfrute)
          : null,
        fecha_pago: d.fecha_pago ? new Date(d.fecha_pago) : null,
      }));

      const buffer =
        await this.archivoAdjuntoService.generarConsolidadoPostNomina(
          solicitudes,
        );

      const hoy = new Date();
      const yyyy = hoy.getFullYear();
      const mm = String(hoy.getMonth() + 1).padStart(2, '0');
      const dd = String(hoy.getDate()).padStart(2, '0');
      const fechaStr = `${yyyy}-${mm}-${dd}`;

      res.setHeader(
        'Content-Disposition',
        `attachment; filename="Consolidado_Post_Nomina_${fechaStr}.xlsx"`,
      );
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      );
      res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');

      res.send(buffer);
    } catch (error) {
      console.error('❌ Error al generar Excel desde datos enviados:', error);
      return res.status(500).json({
        message: 'Error al generar archivo desde los datos proporcionados',
        error: error instanceof Error ? error.stack : String(error),
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('exportar-archivo-respuesta')
  async exportarDesdeVistaPrevia(
    @Body() datos: FilaParaExportar[],
    @Res() res: Response,
  ) {
    try {
      if (!datos || datos.length === 0) {
        return res.status(400).json({ message: 'No hay datos para exportar.' });
      }

      const buffer =
        await this.archivoAdjuntoService.generarDesdeVistaPrevia(datos);

      // datos para el nombre del archivo
      const primera = datos[0];
      const filename = `Respuesta_Solicitud_${primera.id ?? 'ID'}_${primera.tienda ?? 'Tienda'}.xlsx`;

      // Headers
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${filename}"`,
      );
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      );
      res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');

      res.send(buffer);
    } catch (error) {
      console.error('❌ Error al exportar desde tabla:', error);
      return res.status(500).json({
        message: 'Error al generar Excel desde la vista previa',
        error: error instanceof Error ? error.stack : String(error),
      });
    }
  }
}
