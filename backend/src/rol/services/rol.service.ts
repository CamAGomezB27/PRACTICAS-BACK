// src/modules/rol/service/rol.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RolService {
  constructor(private prisma: PrismaService) {}

  async obtenerRoles() {
    return this.prisma.rol.findMany({
      select: {
        id_rol: true,
        nombre_rol: true,
      },
      orderBy: {
        id_rol: 'asc',
      },
    });
  }
}
