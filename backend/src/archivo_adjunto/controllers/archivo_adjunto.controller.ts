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
import { getMensajePorEstadoBackendPorId } from 'src/utils/getMensajePorEstado';
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
    esNomina: boolean;
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

//Filas en archivo de exportación
interface FilaParaExportar {
  id: number;
  numero: number;
  fecha: string;
  cedula: number;
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
  diasATomar: number;
  fechInicioDisfrute: string;
  fechaFinDisfrute: string;
  ResponsableValidacion: string;
  RespuestaValidacion: string;
  ajuste: string;
  Fechapago: string;
  AreaRespon: string;
  CategInconsitencia: string;
}

interface CrearNovedadIndividual {
  //BASICOS
  cedula: number;
  nombre: string;
  detalle: string;
  titulo: string;
  categoria?: string;
  tienda?: string;
  jefe?: string;
  fecha?: string; // 👈 importante para el registro base

  // Para Vacaciones

  dias?: number;

  // Para Horas Extra
  concepto?: string;
  codigo?: string;
  unidad?: string;

  // para Otro Si Temporal
  jornada_actual?: string;
  nueva_jornada?: string;

  salario_actual?: number;
  nuevo_salario?: number;
  consecutivo?: string;

  //LOS QUE SE REPITEN
  fecha_inicio?: string;
  fecha_fin?: string;
  fecha_novedad?: string;
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

      const jwtToken =
        typeof req.cookies?.jwt === 'string' ? req.cookies.jwt : '';
      const validacion: ResultadoValidacion =
        await this.archivoAdjuntoService.validarArchivoBufferConMicroservicio(
          archivo.buffer,
          tipo,
          titulo,
          req.user.nombre,
          req.user.nombreTienda,
          jwtToken,
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

      console.log('🚀 Entrando a crearNovedad masiva');
      console.log('🤖 req.user:', req.user);

      const rol = {
        esNomina: req.user.esNomina,
        esJefe: req.user.esJefe,
      };

      console.log('🧠 Rol extraído:', rol);

      const mensaje = getMensajePorEstadoBackendPorId(1, rol);

      console.log('📩 Mensaje generado:', mensaje);

      const novedad = await this.novedadService.crearNovedad({
        idUsuario: req.user.id_usuario,
        descripcion: mensaje,
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
  @Post('formulario-novedad')
  async subirFormulario(
    @Req() req: AuthenticatedRequest,
    @Body() body: CrearNovedadIndividual,
  ): Promise<any> {
    try {
      const { cedula, nombre, detalle, fecha, tienda, jefe, titulo } = body;

      const errores: string[] = [];

      // ✅ Validaciones básicas
      if (!/^\d{6,10}$/.test(String(cedula))) {
        errores.push('La cédula debe contener entre 6 y 10 dígitos numéricos.');
      }

      if (
        !/^[A-Za-zÁÉÍÓÚÑáéíóúñ\s'.-]+$/.test(nombre) ||
        nombre.trim().length < 7
      ) {
        errores.push(
          'El nombre es inválido o demasiado corto (mínimo 7 caracteres).',
        );
      }

      if (
        !detalle ||
        detalle.trim().length < 15 ||
        detalle.trim().length > 250
      ) {
        errores.push(
          'El detalle debe tener entre 15 y 250 caracteres. Asegúrate de incluir suficiente información.',
        );
      }

      if (!fecha || !tienda || !jefe) {
        console.warn(
          '🟡 Advertencia: datos esperados por el sistema no fueron enviados desde el frontend',
        );
      }

      // ⚠️ Validar título internamente sin lanzar error al usuario
      const tiposPermitidos = [
        'Auxilio de transporte',
        'Horas Extra',
        'Vacaciones',
        'Otro Si Temporal',
        'Otro Si Definitivo',
        'Descuento',
        'Otros',
      ];

      if (!tiposPermitidos.includes(titulo)) {
        console.warn(`⚠️ Título de novedad no reconocido: "${titulo}".`);
      }

      // 🛑 Si hay errores, retornar
      if (errores.length > 0) {
        console.warn('🛑 Errores en el formulario individual:', errores);
        return {
          valido: false,
          errores,
        };
      }

      // ✅ Procesar novedad
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

      const rol = {
        esNomina: req.user.esNomina,
        esJefe: req.user.esJefe,
      };

      const mensaje = getMensajePorEstadoBackendPorId(1, rol);

      const novedad = await this.novedadService.crearNovedad({
        idUsuario: req.user.id_usuario,
        descripcion: mensaje,
        idEstado: 1,
        idTipoNovedad,
        esMasiva: false,
        cantidadSolicitudes: 1,
      });

      await this.archivoAdjuntoService.guardarFormularioIndividual(
        body,
        novedad.id_novedad,
      );

      console.log('✅ Novedad individual registrada con éxito');

      return {
        valido: true,
        message: '✅ Novedad individual registrada con éxito',
        usuario: req.user.nombre,
        novedadId: novedad.id_novedad,
      };
    } catch (error: unknown) {
      console.error('❌ Error al subir novedad individual:', error);
      return {
        valido: false,
        message: '❌ Error al registrar la novedad',
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

  @UseGuards(JwtAuthGuard)
  @Post('exportar-archivo-respuesta-masiva')
  async exportarArchivoRespuestaMasiva(
    @Body() datos: FilaParaExportar[],
    @Res() res: Response,
  ) {
    try {
      if (!datos || datos.length === 0) {
        return res.status(400).json({ message: 'No hay datos para exportar.' });
      }

      console.log(
        '🟢 Recibiendo datos para exportación masiva...',
        datos.length,
      );

      // 🔧 Generar el archivo con los datos
      const buffer =
        await this.archivoAdjuntoService.generarDesdeVistaPrevia(datos);

      // 🧠 Extraer categorías únicas
      const categorias = Array.from(
        new Set(
          datos
            .map((d) => d.categoria || '')
            .filter((cat) => cat.trim() !== '')
            .map((cat) =>
              cat
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/\s+/g, '_')
                .toUpperCase(),
            ),
        ),
      );

      const categoriasStr = categorias.join('_') || 'SIN_CATEGORIAS';

      // 📅 Fecha actual
      const fecha = new Date();
      const fechaStr = fecha
        .toLocaleDateString('es-CO', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
        .replace(/\//g, '-');

      // 🗂️ Nombre final del archivo
      const filename = `Respuesta_Masiva_${categoriasStr}_${fechaStr}.xlsx`;

      // 🧾 Headers
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${filename}"`,
      );
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      );
      res.setHeader('Access-Control-Expose-Headers', 'Content-Disposition');

      // 📤 Enviar archivo
      res.send(buffer);
    } catch (error) {
      console.error('❌ Error al exportar archivo masivo:', error);
      return res.status(500).json({
        message: 'Error al generar Excel de respuesta masiva',
        error: error instanceof Error ? error.stack : String(error),
      });
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('cargar-respuesta-masiva')
  @UseInterceptors(FileInterceptor('file'))
  async cargarRespuestaMasiva(@UploadedFile() file: Express.Multer.File) {
    return this.archivoAdjuntoService.procesarArchivoRespuestas(file.buffer);
  }
}
