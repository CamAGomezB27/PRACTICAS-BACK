// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtStrategy } from './jwt.strategy';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [JwtModule.register({}), ConfigModule, UsuarioModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],
})
export class AuthModule {}
