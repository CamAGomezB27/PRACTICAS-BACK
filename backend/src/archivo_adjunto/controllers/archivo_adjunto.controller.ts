import { Controller, Get, Query, Res, Req, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { ArchivoAdjuntoService } from '../services/archivo_adjunto.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

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

@Controller('archivo-adjunto')
export class ArchivoAdjuntoController {
  constructor(private readonly archivoAdjuntoService: ArchivoAdjuntoService) {}

  @UseGuards(JwtAuthGuard)
  @Get('descargar-plantilla')
  async descargarPlantilla(
    @Req() req: AuthenticatedRequest,
    @Res() res: Response,
    @Query('titulo') titulo: string,
    @Query('cantidad') cantidad: string,
  ) {
    try {
      console.log('REQ.USER:', req.user);
      console.log('Llamando al servicio para generar plantilla...');
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

      console.log('Título recibido:', titulo);
      console.log('Usuario:', req.user);

      // Headers
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
      console.error('❌ Error al generar plantilla:', error);
      res.status(500).json({
        message: 'No se pudo generar la plantilla',
        error: error instanceof Error ? error.stack : String(error),
      });
    }
  }
}
