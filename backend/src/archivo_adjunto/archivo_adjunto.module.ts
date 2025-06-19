import { Module } from '@nestjs/common';
import { ArchivoAdjuntoController } from './controllers/archivo_adjunto.controller';
import { ArchivoAdjuntoService } from './services/archivo_adjunto.service';
import { NovedadModule } from 'src/novedad/novedad.module';
@Module({
  controllers: [ArchivoAdjuntoController],
  providers: [ArchivoAdjuntoService],
  imports: [NovedadModule],
  exports: [ArchivoAdjuntoService],
})
export class ArchivoAdjuntoModule {}
