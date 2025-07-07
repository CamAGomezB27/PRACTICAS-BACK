// src/modules/rol/rol.module.ts
import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { RolController } from './controllers/rol.controller';
import { RolService } from './services/rol.service';

@Module({
  controllers: [RolController],
  providers: [RolService, PrismaService],
})
export class RolModule {}
