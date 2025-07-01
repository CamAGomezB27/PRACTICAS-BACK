import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

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
  estado?: string;
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

    if (filtros.fecha) {
      const fechaFiltro: { gte?: Date; lte?: Date } = {};

      if (filtros.fecha.gte) {
        const gteDate = new Date(filtros.fecha.gte);
        fechaFiltro.gte = new Date(
          Date.UTC(
            gteDate.getFullYear(),
            gteDate.getMonth(),
            gteDate.getDate(),
            0,
            0,
            0,
            0,
          ),
        );
      }

      if (filtros.fecha.lte) {
        const lteDate = new Date(filtros.fecha.lte);
        fechaFiltro.lte = new Date(
          Date.UTC(
            lteDate.getFullYear(),
            lteDate.getMonth(),
            lteDate.getDate(),
            23,
            59,
            59,
            999,
          ),
        );
      }

      console.log('🎯 Fecha final para Prisma (UTC):', fechaFiltro);

      if (fechaFiltro.gte || fechaFiltro.lte) {
        whereCondition.fecha = fechaFiltro;
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

    resultados.forEach((r) => {
      console.log('📌 fecha:', r.fecha?.toISOString());
    });

    console.log(
      '📦 Resultados con filtros para tienda:',
      nombreTienda,
      '| Total:',
      resultados.length,
    );

    return resultados;
  }

  async obtenerNovedadesPendientesParaNomina(filtros: FiltrosParaNomina = {}) {
    const whereCondition: Record<string, any> = {
      estado_novedad: {
        nombre_estado: 'CREADA',
      },
    };

    // Filtro por tipo
    if (filtros.tipo) {
      whereCondition.tipo_novedad = {
        nombre_tipo: {
          equals: filtros.tipo,
          mode: 'insensitive',
        },
      };
    }

    // Filtro por tienda
    if (filtros.tienda) {
      whereCondition.usuario = {
        usuario_tienda: {
          some: {
            tienda: {
              nombre_tienda: {
                equals: filtros.tienda,
                mode: 'insensitive',
              },
            },
          },
        },
      };
    }

    //Filtro por fecha de creación
    if (filtros.fecha) {
      const fechaFiltro: { gte?: Date; lte?: Date } = {};

      if (filtros.fecha.gte) {
        const gte = new Date(filtros.fecha.gte);
        fechaFiltro.gte = new Date(
          gte.getFullYear(),
          gte.getMonth(),
          gte.getDate(),
          0,
          0,
          0,
          0,
        );
      }

      if (filtros.fecha.lte) {
        const lte = new Date(filtros.fecha.lte);
        fechaFiltro.lte = new Date(
          lte.getFullYear(),
          lte.getMonth(),
          lte.getDate(),
          23,
          59,
          59,
          999,
        );
      }

      if (fechaFiltro.gte || fechaFiltro.lte) {
        whereCondition.fecha_creacion = fechaFiltro;
      }
    }

    return this.prisma.novedad.findMany({
      where: whereCondition,
      orderBy: {
        fecha_creacion: 'desc',
      },
      select: {
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
      },
    });
  }

  async obtenerDetallesParaConsolidado(filtros: FiltrosParaNomina = {}) {
    const whereCondition: Record<string, any> = {};

    if (filtros.tienda) {
      whereCondition.tienda = {
        equals: filtros.tienda,
        mode: 'insensitive',
      };
    }

    if (filtros.tipo) {
      whereCondition.categoria = {
        equals: filtros.tipo,
        mode: 'insensitive',
      };
    }

    if (filtros.fecha) {
      const fechaFiltro: { gte?: Date; lte?: Date } = {};

      if (filtros.fecha.gte) {
        fechaFiltro.gte = new Date(
          filtros.fecha.gte.getFullYear(),
          filtros.fecha.gte.getMonth(),
          filtros.fecha.gte.getDate(),
          0,
          0,
          0,
          0,
        );
      }

      if (filtros.fecha.lte) {
        fechaFiltro.lte = new Date(
          filtros.fecha.lte.getFullYear(),
          filtros.fecha.lte.getMonth(),
          filtros.fecha.lte.getDate(),
          23,
          59,
          59,
          999,
        );
      }

      if (fechaFiltro.gte || fechaFiltro.lte) {
        whereCondition.fecha = fechaFiltro;
      }
    }

    return this.prisma.detalleNovedadMasiva.findMany({
      where: whereCondition,
      orderBy: { fecha: 'asc' },
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

  async cambiarEstadoNovedad(
    idNovedad: number,
    nuevoEstadoId: number,
    idUsuario: number,
  ) {
    // Cambiar estado en la novedad
    await this.prisma.novedad.update({
      where: { id_novedad: idNovedad },
      data: { id_estado_novedad: nuevoEstadoId },
    });

    // Registrar historial
    await this.prisma.historial_novedad.create({
      data: {
        id_novedad: idNovedad,
        id_estado_novedad: nuevoEstadoId,
        id_usuario_modificacion: idUsuario,
        comentario: 'Cambiado a EN GESTIÓN desde el botón de nómina',
      },
    });

    return { success: true, message: 'Estado actualizado correctamente' };
  }

  async obtenerTodasNovedadesParaNomina(filtros: FiltrosParaNomina) {
    return this.prisma.novedad.findMany({
      where: {
        ...(filtros.tienda && {
          usuario: {
            usuario_tienda: {
              some: {
                tienda: {
                  nombre_tienda: {
                    contains: filtros.tienda,
                    mode: 'insensitive',
                  },
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
        ...(filtros.fecha && {
          fecha_creacion: filtros.fecha,
        }),
        // ❌ ¡OJO! NO pongas filtro por estado acá
      },
      include: {
        estado_novedad: true,
        tipo_novedad: true,
        usuario: {
          include: {
            usuario_tienda: {
              include: {
                tienda: true,
              },
            },
          },
        },
      },
      orderBy: {
        fecha_creacion: 'desc',
      },
    });
  }

  async obtenerDetallesPendientesParaNomina(filtros: FiltrosParaNomina = {}) {
    const whereCondition: Record<string, any> = {
      novedad: {
        estado_novedad: {
          nombre_estado: {
            equals: 'CREADA', // o 'PENDIENTE' si así está en la BD
            mode: 'insensitive',
          },
        },
      },
    };

    if (filtros.tienda) {
      whereCondition.tienda = {
        equals: filtros.tienda,
        mode: 'insensitive',
      };
    }

    if (filtros.tipo) {
      whereCondition.categoria = {
        equals: filtros.tipo,
        mode: 'insensitive',
      };
    }

    if (filtros.fecha) {
      const fechaFiltro: { gte?: Date; lte?: Date } = {};

      if (filtros.fecha.gte) {
        fechaFiltro.gte = new Date(
          filtros.fecha.gte.getFullYear(),
          filtros.fecha.gte.getMonth(),
          filtros.fecha.gte.getDate(),
          0,
          0,
          0,
          0,
        );
      }

      if (filtros.fecha.lte) {
        fechaFiltro.lte = new Date(
          filtros.fecha.lte.getFullYear(),
          filtros.fecha.lte.getMonth(),
          filtros.fecha.lte.getDate(),
          23,
          59,
          59,
          999,
        );
      }

      if (fechaFiltro.gte || fechaFiltro.lte) {
        whereCondition.fecha = fechaFiltro;
      }
    }

    return this.prisma.detalleNovedadMasiva.findMany({
      where: whereCondition,
      orderBy: { fecha: 'asc' },
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
}
