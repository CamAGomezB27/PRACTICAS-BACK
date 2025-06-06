import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const correo = 'camiloandresgomez05272002@gmail.com';
  const nuevoRol = 3; //Nuevo rol

  const usuario = await prisma.usuario.findUnique({
    where: { correo },
  });

  if (!usuario) {
    console.error('🚫 Usuario no encontrado');
    return;
  }

  await prisma.usuario_rol.update({
    where: {
      id_usuario_id_rol: {
        id_usuario: usuario.id_usuario,
        id_rol: 2, //Rol viejo
      },
    },
    data: {
      id_rol: nuevoRol,
    },
  });

  console.log(`🔁 Rol actualizado para ${correo} a ${nuevoRol}`);
}

main()
  .catch((e) => {
    console.error('🚨 Error:', e);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
