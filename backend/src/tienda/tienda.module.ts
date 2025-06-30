import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { TiendaController } from './controllers/tienda.controller';
import { TiendaService } from './service/tienda.service';

@Module({
  imports: [PrismaModule],
  controllers: [TiendaController],
  providers: [TiendaService],
})
export class TiendaModule {}
