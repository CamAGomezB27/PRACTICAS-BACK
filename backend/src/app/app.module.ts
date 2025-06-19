// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module'; // importa el módulo de auth
import { AppController } from './controllers/app.controller';
import { ArchivoAdjuntoModule } from 'src/archivo_adjunto/archivo_adjunto.module';
import { NovedadModule } from 'src/novedad/novedad.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ArchivoAdjuntoModule,
    NovedadModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
