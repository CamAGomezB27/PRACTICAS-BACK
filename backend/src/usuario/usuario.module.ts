import { Module } from '@nestjs/common';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
