import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class usuarioService {
  constructor(private prisma: PrismaService) {}

  async validarEmail(email: string): Promise<boolean> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { correo: email },
    });
    return !!usuario;
  }
}
