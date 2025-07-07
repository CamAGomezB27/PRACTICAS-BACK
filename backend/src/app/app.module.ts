// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'prisma/prisma.module';
import { ArchivoAdjuntoModule } from 'src/archivo_adjunto/archivo_adjunto.module';
import { NovedadModule } from 'src/novedad/novedad.module';
import { RolModule } from 'src/rol/rol.module';
import { TiendaModule } from 'src/tienda/tienda.module';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { AuthModule } from '../auth/auth.module'; // importa el módulo de auth
import { AppController } from './controllers/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    ArchivoAdjuntoModule,
    NovedadModule,
    PrismaModule,
    TiendaModule,
    UsuarioModule,
    RolModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
