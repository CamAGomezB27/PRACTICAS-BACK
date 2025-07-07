// src/usuario/usuario.service.ts
import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

interface CrearUsuarioInput {
  nombre: string;
  correo: string;
  rol: string;
  tienda?: string;
}

@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async validarEmail(email: string): Promise<boolean> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { correo: email },
    });
    return !!usuario;
  }

  async findById(id_usuario: number) {
    return this.prisma.usuario.findUnique({
      where: { id_usuario },
      include: {
        usuario_rol: {
          include: {
            rol: true,
          },
        },
      },
    });
  }

  async crearUsuario(body: CrearUsuarioInput) {
    const { nombre, correo, rol, tienda } = body;

    if (!nombre || !correo || !rol) {
      throw new BadRequestException('Nombre, correo y rol son requeridos.');
    }

    const rolDB = await this.prisma.rol.findFirst({
      where: {
        nombre_rol: {
          equals: rol.trim(),
          mode: 'insensitive',
        },
      },
    });

    if (!rolDB) {
      throw new BadRequestException(`El rol '${rol}' no existe.`);
    }

    const idRol = rolDB.id_rol;

    const existing = await this.prisma.usuario.findUnique({
      where: { correo },
    });

    if (existing) {
      throw new BadRequestException(
        `Ya existe un usuario con el correo '${correo}'.`,
      );
    }

    let idTienda: number | null = null;

    if (rolDB.nombre_rol.toUpperCase() === 'JEFE DE TIENDA') {
      if (!tienda) {
        throw new BadRequestException(
          'Debe indicar una tienda para el Jefe de Tienda.',
        );
      }

      const tiendaDB = await this.prisma.tienda.findFirst({
        where: {
          nombre_tienda: {
            equals: tienda.trim(),
            mode: 'insensitive',
          },
        },
      });

      if (!tiendaDB) {
        throw new BadRequestException(`La tienda '${tienda}' no existe.`);
      }

      idTienda = tiendaDB.id_tienda;

      const yaAsignada = await this.prisma.usuario_tienda.findFirst({
        where: { id_tienda: idTienda },
      });

      if (yaAsignada) {
        throw new BadRequestException(
          `La tienda '${tienda}' ya está asignada a otro usuario.`,
        );
      }
    }

    if (rolDB.nombre_rol.toUpperCase() !== 'JEFE DE TIENDA' && tienda) {
      throw new BadRequestException(
        `No debe incluir una tienda si el rol no es JEFE DE TIENDA.`,
      );
    }

    const usuario = await this.prisma.usuario.create({
      data: { nombre, correo },
    });

    await this.prisma.usuario_rol.create({
      data: {
        id_usuario: usuario.id_usuario,
        id_rol: idRol,
      },
    });

    if (idTienda) {
      await this.prisma.usuario_tienda.create({
        data: {
          id_usuario: usuario.id_usuario,
          id_tienda: idTienda,
        },
      });
    }

    return {
      mensaje: `✅ Usuario '${nombre}' creado con rol '${rolDB.nombre_rol}'${idTienda ? ` y tienda '${tienda}'` : ''}.`,
      id_usuario: usuario.id_usuario,
    };
  }

  async obtenerRolesYTiendas() {
    const roles = await this.prisma.rol.findMany({
      select: {
        id_rol: true,
        nombre_rol: true,
      },
      orderBy: { id_rol: 'asc' },
    });

    const tiendas = await this.prisma.tienda.findMany({
      select: {
        id_tienda: true,
        nombre_tienda: true,
      },
      orderBy: { id_tienda: 'asc' },
    });

    return {
      roles,
      tiendas,
    };
  }
}
