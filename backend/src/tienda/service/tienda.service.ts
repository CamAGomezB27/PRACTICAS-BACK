import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TiendaService {
  constructor(private prisma: PrismaService) {}

  async obtenerTiendas() {
    return this.prisma.tienda.findMany({
      select: {
        id_tienda: true,
        nombre_tienda: true,
      },
      orderBy: {
        id_tienda: 'asc', //por ID
      },
    });
  }
}
