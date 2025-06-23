import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const correo = '';
  const nuevoRol = 0; // Nuevo rol
  const idTienda = 0; // ID de tienda a asignar (o cambiar) si el rol es 3

  // Buscar el usuario por correo
  const usuario = await prisma.usuario.findUnique({
    where: { correo },
  });

  if (!usuario) {
    console.error(`🚫 No se encuentra el usuario con correo ${correo}`);
    return;
  }

  // Verificar si ya tiene el nuevo rol
  const rolExistente = await prisma.usuario_rol.findUnique({
    where: {
      id_usuario_id_rol: {
        id_usuario: usuario.id_usuario,
        id_rol: nuevoRol,
      },
    },
  });

  if (rolExistente) {
    console.log(`ℹ️ El usuario ya tiene el rol ${nuevoRol}.`);
  } else {
    // Actualizar rol anterior al nuevo
    await prisma.usuario_rol.update({
      where: {
        id_usuario_id_rol: {
          id_usuario: usuario.id_usuario,
          id_rol: 0, // Rol anterior (ajústalo según necesidad)
        },
      },
      data: {
        id_rol: nuevoRol,
      },
    });

    console.log(`🔁 Rol actualizado para ${correo} a ${nuevoRol}`);
  }

  // Si el nuevo rol es 3, manejar asignación o cambio de tienda
  // if (nuevoRol === 3) {
  //   if (!idTienda || idTienda < 1 || idTienda > 44) {
  //     console.log(
  //       `⚠️ El idTienda '${idTienda}' no es válido. Debe estar entre 1 y 44.`,
  //     );
  //     return;
  //   }

  //   // Verificar si la tienda ya está ocupada por otro usuario
  //   const tiendaYaAsignada = await prisma.usuario_tienda.findFirst({
  //     where: {
  //       id_tienda: idTienda,
  //       NOT: {
  //         id_usuario: usuario.id_usuario,
  //       },
  //     },
  //   });

  // if (tiendaYaAsignada) {
  //   console.log(
  //     `🚫 La tienda con ID ${idTienda} ya está asignada a otro usuario (ID Usuario: ${tiendaYaAsignada.id_usuario}).`,
  //   );
  //   return;
  // }

  // Verificar si el usuario ya tiene alguna tienda asignada
  const tiendaExistente = await prisma.usuario_tienda.findFirst({
    where: {
      id_usuario: usuario.id_usuario,
    },
  });

  if (tiendaExistente) {
    // Actualizar tienda existente
    await prisma.usuario_tienda.update({
      where: {
        id_usuario_id_tienda: {
          id_usuario: usuario.id_usuario,
          id_tienda: tiendaExistente.id_tienda,
        },
      },
      data: {
        id_tienda: idTienda,
      },
    });

    console.log(
      `🔁 Se cambió la tienda del usuario ${correo} a la tienda con ID ${idTienda}`,
    );
  } else {
    // Crear nueva asignación si no tenía tienda antes
    await prisma.usuario_tienda.create({
      data: {
        id_usuario: usuario.id_usuario,
        id_tienda: idTienda,
      },
    });

    console.log(
      `🏬 Usuario ${correo} fue asignado a la tienda con ID ${idTienda}`,
    );
  }
}
// }

main()
  .catch((e) => {
    console.error('🚨 Error:', e);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
