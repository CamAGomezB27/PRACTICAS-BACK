//main.ts
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser()); // Cookies

  app.enableCors({
    origin: 'http://localhost:5173', //url front
    credentials: true, //permite cruze de cookies
  });

  await app.listen(3000);
}

bootstrap().catch(console.error);
