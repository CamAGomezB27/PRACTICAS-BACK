// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from '../auth/auth.module'; // importa el módulo de auth

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule, //  agrégalo aquí
  ],
})
export class AppModule {}
