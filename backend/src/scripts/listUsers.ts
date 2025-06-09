import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const usuarios = await prisma.usuario.findMany({
    include: {
      usuario_rol: {
        include: {
          rol: true,
        },
      },
    },
  });

  for (const u of usuarios) {
    console.log(`👤 ${u.nombre} (${u.correo})`);
    for (const ur of u.usuario_rol) {
      console.log(`  ↳ Rol: ${ur.rol.nombre_rol}`);
    }
  }
}

main()
  .catch((e) => {
    console.error('🚨 Error:', e);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
