//main.ts
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Sistema Nomina')
    .setDescription('Documentación de Nomina')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('Nomina/docs', app, document);

  app.use(cookieParser()); // Cookies

  app.enableCors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], //url front
    credentials: true, //permite cruze de cookies
  });

  await app.listen(3000);
}

bootstrap().catch(console.error);
