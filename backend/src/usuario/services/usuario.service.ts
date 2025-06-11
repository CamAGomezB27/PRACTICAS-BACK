// src/usuario/usuario.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async validarEmail(email: string): Promise<boolean> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { correo: email },
    });
    return !!usuario;
  }

  async findById(id_usuario: number) {
    return this.prisma.usuario.findUnique({
      where: { id_usuario },
      include: {
        usuario_rol: {
          include: {
            rol: true,
          },
        },
      },
    });
  }
}
