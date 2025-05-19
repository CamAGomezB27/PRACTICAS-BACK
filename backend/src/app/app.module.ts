// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module'; // importa el módulo de auth
import { AppController } from './controllers/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule, //  agrégalo aquí
  ],
  controllers: [AppController],
})
export class AppModule {}
