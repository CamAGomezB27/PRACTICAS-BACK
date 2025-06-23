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
  }) {
    const { idUsuario, descripcion, idEstado, idTipoNovedad } = params;

    return this.prisma.novedad.create({
      data: {
        id_usuario: idUsuario,
        descripcion,
        id_estado_novedad: idEstado,
        id_tipo_novedad: idTipoNovedad,
      },
    });
  }

  async obtenerNovedadesUsuarios(idUsuario: number, esJefe: boolean) {
    const includeConfig = {
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
    };

    const orderConfig = {
      fecha_creacion: 'desc' as const,
    };

    const baseQuery = {
      include: includeConfig,
      orderBy: orderConfig,
    };

    if (esJefe) {
      return this.prisma.novedad.findMany({
        ...baseQuery,
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

    // Para nómina
    return this.prisma.novedad.findMany(baseQuery);
  }
}
