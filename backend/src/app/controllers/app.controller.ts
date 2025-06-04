import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return '¡Hola desde el backend!, aca vamos a gestionar las novedades postnomina para SODIMAC';
  }
}
