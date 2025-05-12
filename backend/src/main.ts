// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:5173', // Solo permite peticiones desde tu frontend
    credentials: true, // Si vas a enviar cookies/token con credenciales
  });

  await app.listen(3000);
}
bootstrap().catch((err) => {
  console.error('Error al iniciar la aplicación:', err);
});
