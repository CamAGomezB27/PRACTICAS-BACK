import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const correo = '';

  const usuario = await prisma.usuario.findUnique({
    where: { correo },
  });

  if (!usuario) {
    console.error(`🚫 No se encuentra el usuario`);
    return;
  }

  await prisma.usuario_rol.deleteMany({
    where: { id_usuario: usuario.id_usuario },
  });

  await prisma.usuario.delete({
    where: { id_usuario: usuario.id_usuario },
  });

  console.log(`🗑️ Usuario ${correo} eliminado`);
}

main()
  .catch((e) => {
    console.error('🚨 Error:', e);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
