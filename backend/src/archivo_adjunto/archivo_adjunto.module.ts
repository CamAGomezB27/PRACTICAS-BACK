import { Module } from '@nestjs/common';
import { ArchivoAdjuntoController } from './controllers/archivo_adjunto.controller';
import { ArchivoAdjuntoService } from './services/archivo_adjunto.service';

@Module({
  controllers: [ArchivoAdjuntoController],
  providers: [ArchivoAdjuntoService],
  exports: [ArchivoAdjuntoService],
})
export class ArchivoAdjuntoModule {}
