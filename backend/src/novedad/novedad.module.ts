import { Module } from '@nestjs/common';
import { NovedadeService } from './services/novedad.service';
import { NovedadController } from './controllers/novedad.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [NovedadController],
  providers: [NovedadeService, PrismaService],
  exports: [NovedadeService],
})
export class NovedadModule {}
