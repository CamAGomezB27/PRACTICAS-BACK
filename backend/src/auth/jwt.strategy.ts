import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt, Strategy as JwtStrategyBase } from 'passport-jwt';

interface JwtPayload {
  correo: string;
  id_usuario: number;
  nombre: string;
  rol: string;
  esAdmin: boolean;
  esNomina: boolean;
  esJefe: boolean;
  panelTitle: string;
  userRoleTitle: string;
  nombreTienda?: string;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(JwtStrategyBase) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (req: Request): string | null => {
          const cookies = req.cookies as { jwt?: string }; // ← tipado explícito
          if (cookies?.jwt) return cookies.jwt;

          const authHeader = req.headers.authorization;
          if (authHeader?.startsWith('Bearer ')) {
            return authHeader.slice(7);
          }

          return null;
        },
      ]),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET')!, // ← forzado aquí
    });
  }

  validate(payload: JwtPayload): JwtPayload {
    console.log('✅ JWT validado con éxito:', payload);
    return payload;
  }
}
