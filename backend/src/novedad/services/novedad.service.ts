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

    const novedad = await this.prisma.novedad.create({
      data: {
        id_usuario: idUsuario,
        descripcion,
        id_estado_novedad: idEstado,
        id_tipo_novedad: idTipoNovedad,
      },
    });
    return novedad;
  }

  async obtenerNovedades() {
    return this.prisma.novedad.findMany({
      include: {
        estado_novedad: true,
      },
      orderBy: {
        fecha_creacion: 'desc',
      },
    });
  }
}
