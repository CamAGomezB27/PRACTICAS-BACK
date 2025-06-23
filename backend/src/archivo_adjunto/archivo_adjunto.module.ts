import { Module } from '@nestjs/common';
import { ArchivoAdjuntoController } from './controllers/archivo_adjunto.controller';
import { ArchivoAdjuntoService } from './services/archivo_adjunto.service';
import { NovedadModule } from 'src/novedad/novedad.module';
import { PrismaModule } from 'prisma/prisma.module';
@Module({
  controllers: [ArchivoAdjuntoController],
  providers: [ArchivoAdjuntoService],
  imports: [PrismaModule, NovedadModule],
  exports: [ArchivoAdjuntoService],
})
export class ArchivoAdjuntoModule {}
