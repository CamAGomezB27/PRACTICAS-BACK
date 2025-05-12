import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Asegúrate de importar JwtModule
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../../prisma/prisma.service'; // Importa correctamente PrismaService

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Cambia esto por una clave secreta segura
      signOptions: { expiresIn: '1h' }, // El token expira en 1 hora
    }),
  ],
  providers: [AuthService, PrismaService],
  controllers: [AuthController],
})
export class AuthModule {}
