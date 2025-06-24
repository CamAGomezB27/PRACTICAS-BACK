import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class NovedadeService {
  constructor(private prisma: PrismaService) {}

  async crearNovedad(params: {
    idUsuario: number;
    descripcion: string;
    idEstado: number;
    idTipoNovedad?: number;
    esMasiva?: boolean;
    cantidadSolicitudes?: number;
  }) {
    const {
      idUsuario,
      descripcion,
      idEstado,
      idTipoNovedad,
      esMasiva = false,
      cantidadSolicitudes = null,
    } = params;

    return this.prisma.novedad.create({
      data: {
        id_usuario: idUsuario,
        descripcion,
        id_estado_novedad: idEstado,
        id_tipo_novedad: idTipoNovedad,
        es_masiva: esMasiva,
        cantidad_solicitudes: cantidadSolicitudes,
      },
    });
  }

  async obtenerNovedadesUsuarios(idUsuario: number, esJefe: boolean) {
    const selectConfig = {
      id_novedad: true,
      descripcion: true,
      fecha_creacion: true,
      es_masiva: true,
      cantidad_solicitudes: true,
      estado_novedad: {
        select: {
          nombre_estado: true,
        },
      },
      tipo_novedad: {
        select: {
          nombre_tipo: true,
        },
      },
      usuario: {
        select: {
          usuario_tienda: {
            select: {
              tienda: {
                select: {
                  nombre_tienda: true,
                },
              },
            },
          },
        },
      },
    };

    const orderByConfig = {
      fecha_creacion: 'desc' as const,
    };

    if (esJefe) {
      return this.prisma.novedad.findMany({
        select: selectConfig,
        orderBy: orderByConfig,
        where: {
          usuario: {
            usuario_tienda: {
              some: {
                id_usuario: idUsuario,
              },
            },
          },
        },
      });
    }

    return this.prisma.novedad.findMany({
      select: selectConfig,
      orderBy: orderByConfig,
    });
  }

  async obtenerDetalleMasivo(idNovedad: number) {
    return this.prisma.detalleNovedadMasiva.findMany({
      where: { id_novedad: idNovedad },
      select: {
        id_novedad: true,
        n: true,
        fecha: true,
        cedula: true,
        nombre: true,
        categoria: true,
        tienda: true,
        jefe: true,
        detalle: true,
        jornada_empleado: true,
        jornada_otro_si: true,
        fecha_inicio: true,
        fecha_fin: true,
        salario_actual: true,
        salario_otro_si: true,
        consecutivo_forms: true,
        concepto: true,
        codigo_concepto: true,
        unidades: true,
        fecha_novedad: true,
        fecha_inicio_disfrute: true,
        fecha_fin_disfrute: true,
        responsable_validacion: true,
        respuesta_validacion: true,
        ajuste: true,
        fecha_pago: true,
        area_responsable: true,
        categoria_inconsistencia: true,
      },
    });
  }

  async obtenerDetalleMasivoPorTienda(idUsuario: number) {
    const usuarioConTienda = await this.prisma.usuario.findUnique({
      where: { id_usuario: idUsuario },
      select: {
        usuario_tienda: {
          select: {
            tienda: {
              select: {
                nombre_tienda: true,
              },
            },
          },
        },
      },
    });

    const nombreTienda =
      usuarioConTienda?.usuario_tienda[0]?.tienda?.nombre_tienda;

    if (!nombreTienda) return [];

    // 🔍 Aquí hacemos lo que te decía: guardar en variable y loguear
    const resultados = await this.prisma.detalleNovedadMasiva.findMany({
      where: {
        tienda: nombreTienda,
      },
      select: {
        id_novedad: true,
        n: true,
        fecha: true,
        cedula: true,
        nombre: true,
        categoria: true,
        tienda: true,
        jefe: true,
        detalle: true,
        jornada_empleado: true,
        jornada_otro_si: true,
        fecha_inicio: true,
        fecha_fin: true,
        salario_actual: true,
        salario_otro_si: true,
        consecutivo_forms: true,
        concepto: true,
        codigo_concepto: true,
        unidades: true,
        fecha_novedad: true,
        fecha_inicio_disfrute: true,
        fecha_fin_disfrute: true,
        responsable_validacion: true,
        respuesta_validacion: true,
        ajuste: true,
        fecha_pago: true,
        area_responsable: true,
        categoria_inconsistencia: true,
      },
    });

    // 🧪 Log de prueba para ver si trajo algo
    console.log(
      '📦 Resultados encontrados para tienda:',
      nombreTienda,
      '-',
      resultados.length,
    );

    return resultados;
  }
}
