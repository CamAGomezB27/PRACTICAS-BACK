// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const nombre = ''; // Nombre Apellido del usuario
//   const correo = ''; // Correo a agregar del usuario
//   const idRol = 0; // Rol que llevará (Recordar que 0 no es ningún rol)
//   const idTienda = 0; // Solo si el rol es 3, se debe indicar aquí el ID de tienda correspondiente

//   // Verificar si ya existe usuario con ese correo
//   const existingUser = await prisma.usuario.findUnique({
//     where: { correo },
//   });

//   if (existingUser) {
//     console.log(`🚫 Ya existe un usuario con el correo ${correo}.`);
//     return;
//   }

//   // Si es jefe de tienda, verificar si la tienda ya está asignada
//   if (idRol === 3) {
//     if (!idTienda || idTienda < 1 || idTienda > 44) {
//       console.log(
//         `⚠️ El idTienda '${idTienda}' no es válido. Debe estar entre 1 y 44.`,
//       );
//       return;
//     }

//     const tiendaAsignada = await prisma.usuario_tienda.findFirst({
//       where: {
//         id_tienda: idTienda,
//       },
//     });

//     if (tiendaAsignada) {
//       console.log(
//         `🚫 La tienda con ID ${idTienda} ya está asignada a otro usuario (ID Usuario: ${tiendaAsignada.id_usuario}).`,
//       );
//       return;
//     }
//   }

//   // Crear usuario
//   const user = await prisma.usuario.create({
//     data: {
//       nombre,
//       correo,
//     },
//   });

//   // Asignar rol al usuario
//   await prisma.usuario_rol.create({
//     data: {
//       id_usuario: user.id_usuario,
//       id_rol: idRol,
//     },
//   });

//   // Asociar tienda si aplica
//   if (idRol === 3) {
//     await prisma.usuario_tienda.create({
//       data: {
//         id_usuario: user.id_usuario,
//         id_tienda: idTienda,
//       },
//     });

//   console.log(
//     `🏬 Usuario ${nombre} fue asignado a la tienda con ID ${idTienda}.`,
//   );
// }

// console.log(`✅ Usuario ${nombre} agregado con rol ${idRol}`);
// }

// main()
//   .catch((e) => {
//     console.error('🚨 Error:', e);
//   })
//   .finally(() => {
//     void prisma.$disconnect();
//   });
