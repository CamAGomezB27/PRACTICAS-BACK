import {
  Controller,
  Get,
  Query,
  Res,
  Req,
  UseGuards,
  UploadedFile,
  UseInterceptors,
  Post,
  Body,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { ArchivoAdjuntoService } from '../services/archivo_adjunto.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { NovedadeService } from 'src/novedad/services/novedad.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { Express } from 'express';

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
}

// Resultado de validación
interface ResultadoValidacion {
  valido: boolean;
  errores?: string[];
  cantidadSolicitudes?: number;
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
    FileInterceptor('archivo', {
      storage: memoryStorage(),
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/\.(xlsx)$/)) {
          cb(null, true);
        } else {
          cb(new Error('Solo se permiten archivos .xlsx'), false);
        }
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // 5MB
      },
    }),
  )
  async subirArchivo(
    @UploadedFile() archivo: Express.Multer.File,
    @Req() req: AuthenticatedRequest,
    @Body() body: ArchivoSubido,
  ) {
    try {
      console.log('📄 Archivo recibido:', archivo);
      const titulo = body.titulo;

      // ✅ VALIDACIÓN DE ARCHIVO
      const validacion: ResultadoValidacion =
        await this.archivoAdjuntoService.validarArchivoBufferConMicroservicio(
          archivo.buffer,
        );

      console.log('🧪 Resultado de validación:', validacion);

      if (!validacion.valido) {
        return {
          message: '❌ El archivo contiene errores',
          errores: validacion.errores,
        };
      }

      // Capturar la cantidad de solicitudes detectadas
      const cantidad = validacion.cantidadSolicitudes ?? 0;

      // CREACIÓN DE NOVEDAD
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

      console.log('🧪 Resultado de validación:', validacion);
      console.log('Cantidad detectada:', validacion.cantidadSolicitudes);

      const novedad = await this.novedadService.crearNovedad({
        idUsuario: req.user.id_usuario,
        descripcion: `Archivo "${archivo.originalname}" subido exitosamente`,
        idEstado: 1, // Estado: CREADA
        idTipoNovedad,
        esMasiva: true,
        cantidadSolicitudes: cantidad,
      });

      // PROCESAR Y GUARDAR
      await this.archivoAdjuntoService.procesarYGuardarExcel(
        archivo.buffer,
        novedad.id_novedad,
      );

      return {
        message: '✅ Archivo subido y procesado correctamente',
        usuario: req.user.nombre,
        novedadId: novedad.id_novedad,
        cantidadProcesada: cantidad,
      };
    } catch (error) {
      console.error('❌ Error al subir y procesar archivo:', error);
      return {
        message: 'No se pudo subir el archivo',
        error: error instanceof Error ? error.stack : String(error),
      };
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('exportar-consolidado')
  async exportarConsolidadoDesdeDatos(
    @Body() datos: any[], // Aquí puedes tiparlo como `SolicitudConIdDetalle[]` si ya tienes la interfaz en común
    @Res() res: Response,
  ) {
    try {
      if (!datos || datos.length === 0) {
        return res
          .status(400)
          .json({ message: 'No se recibieron datos para exportar' });
      }

      const buffer =
        await this.archivoAdjuntoService.generarConsolidadoPostNomina(datos);

      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      );
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=Consolidado_Post_Nomina.xlsx',
      );

      res.send(buffer);
    } catch (error) {
      console.error('❌ Error al generar Excel desde datos enviados:', error);
      return res.status(500).json({
        message: 'Error al generar archivo desde los datos proporcionados',
        error: error instanceof Error ? error.stack : String(error),
      });
    }
  }
}
