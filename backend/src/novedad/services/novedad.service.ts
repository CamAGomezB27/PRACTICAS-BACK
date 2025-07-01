import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

interface FiltrosTienda {
  tipo?: string;
  fecha_novedad?: {
    gte?: Date;
    lte?: Date;
  };
}

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

  async obtenerDetalleMasivoPorTienda(
    idUsuario: number,
    filtros: FiltrosTienda = {},
  ) {
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

    const whereCondition: Record<string, unknown> = {
      tienda: nombreTienda,
    };

    console.log(
      '🧪 whereCondition antes de Prisma.findMany():',
      whereCondition,
    );

    if (filtros.tipo) {
      whereCondition.categoria = {
        equals: filtros.tipo,
        mode: 'insensitive',
      };
    }

    if (filtros.fecha_novedad) {
      const fechaFiltro: { gte?: Date; lte?: Date } = {};

      if (filtros.fecha_novedad.gte) {
        fechaFiltro.gte = new Date(filtros.fecha_novedad.gte);
      }

      if (filtros.fecha_novedad.lte) {
        fechaFiltro.lte = new Date(filtros.fecha_novedad.lte);
      }

      if (fechaFiltro.gte || fechaFiltro.lte) {
        console.log(
          '📅 Usando fechaFiltro CORREGIDO (sin alterar UTC):',
          fechaFiltro,
        );
        whereCondition.fecha = fechaFiltro;
      }
    }

    const resultados = await this.prisma.detalleNovedadMasiva.findMany({
      where: whereCondition,
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

    console.log(
      '📦 Resultados con filtros para tienda:',
      nombreTienda,
      '| Total:',
      resultados.length,
    );

    return resultados;
  }

  async obtenerTodasNovedadesFiltradas(filtros: {
    tienda?: string;
    tipo?: string;
    desde?: string;
    hasta?: string;
  }) {
    const where: Prisma.novedadWhereInput = {
      ...(filtros.tienda && {
        usuario: {
          usuario_tienda: {
            some: {
              tienda: {
                nombre_tienda: filtros.tienda,
              },
            },
          },
        },
      }),

      ...(filtros.tipo && {
        tipo_novedad: {
          nombre_tipo: {
            contains: filtros.tipo,
            mode: 'insensitive',
          },
        },
      }),

      ...(filtros.desde || filtros.hasta
        ? {
            fecha_creacion: {
              ...(filtros.desde && { gte: new Date(filtros.desde) }),
              ...(filtros.hasta && { lte: new Date(filtros.hasta) }),
            },
          }
        : {}),
    };

    return this.prisma.novedad.findMany({
      where,
      orderBy: {
        fecha_creacion: 'desc',
      },
      include: {
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
      },
    });
  }
}
