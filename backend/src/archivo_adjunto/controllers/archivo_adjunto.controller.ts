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
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Express } from 'express';

//Request de usuario
interface AuthenticatedRequest extends Request {
  user: {
    nombre: string;
    correo: string;
    id_usuario: number;
    esJefe: boolean;
    nombreTienda: string;
  };
}

interface ArchivoSubido {
  titulo: string;
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
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
        },
      }),
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
      //Registrar Novedad
      const novedad = await this.novedadService.crearNovedad({
        idUsuario: req.user.id_usuario,
        descripcion: `Archivo "${archivo.originalname}" subido exitosamente`,
        idEstado: 1, //ID de estado CREADA
        idTipoNovedad,
      });

      return {
        message: 'Archivo subido correctamente',
        nombreArchivo: archivo.filename,
        ruta: archivo.path,
        usuario: req.user.nombre,
        novedadId: novedad.id_novedad,
      };
    } catch (error) {
      console.error('❌ Error al subir archivo:', error);
      return {
        message: 'No se pudo subir el archivo',
        error: error instanceof Error ? error.stack : String(error),
      };
    }
  }
}
