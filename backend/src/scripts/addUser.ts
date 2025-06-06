import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const nombre = ''; //Nombre Apellido del usuario
  const correo = ''; //correo a agregar del usuario
  const idRol = 0; //Rol que llevara (Recordar que 0 no es ningun rol)

  // Verificar si ya existe usuario con ese correo
  const existingUser = await prisma.usuario.findUnique({
    where: { correo },
  });

  if (existingUser) {
    console.log(`🚫 Ya existe un usuario con el correo ${correo}.`);
    return;
  }

  const user = await prisma.usuario.create({
    data: {
      nombre,
      correo,
    },
  });

  await prisma.usuario_rol.create({
    data: {
      id_usuario: user.id_usuario,
      id_rol: idRol,
    },
  });

  console.log(`✅ Usuario ${nombre} agragado con rol ${idRol}`);
}

main()
  .catch((e) => {
    console.error('🚨 Error:', e);
  })
  .finally(() => {
    void prisma.$disconnect();
  });
