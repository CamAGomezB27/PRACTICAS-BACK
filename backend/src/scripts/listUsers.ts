// import { PrismaClient } from '@prisma/client';

// const prisma = new PrismaClient();

// async function main() {
//   const usuarios = await prisma.usuario.findMany({
//     include: {
//       usuario_rol: {
//         include: {
//           rol: true,
//         },
//       },
//       usuario_tienda: {
//         include: {
//           tienda: true,
//         },
//       },
//     },
//   });

//   for (const u of usuarios) {
//     console.log(`👤 ${u.nombre} (${u.correo})`);

//     for (const ur of u.usuario_rol) {
//       const rolNombre = ur.rol.nombre_rol;
//       console.log(`  ↳ Rol: ${rolNombre}`);

//       if (ur.id_rol === 3) {
//         const tienda = u.usuario_tienda?.[0]?.tienda;
//         if (tienda) {
//           console.log(`     🏬 Tienda asignada: ${tienda.nombre_tienda}`);
//         } else {
//           console.log(`     ⚠️ No tiene tienda asignada`);
//         }
//       }
//     }
//   }
// }

// main()
//   .catch((e) => {
//     console.error('🚨 Error:', e);
//   })
//   .finally(() => {
//     void prisma.$disconnect();
//   });
