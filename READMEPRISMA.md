# Prisma Database Setup

## Requisitos Previos

- Node.js (versión 16 o superior)
- PostgreSQL instalado y ejecutándose
- npm o yarn

## Instalación

1. **Instalar Prisma CLI**

   ```bash
   npm install -g prisma
   # o como dependencia de desarrollo
   npm install prisma --save-dev
   ```

2. **Instalar Prisma Client**
   ```bash
   npm install @prisma/client
   ```

## Configuración

1. **Variables de entorno**

   Crear archivo `.env` en la raíz del proyecto:

   ```env
   # Database
   DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/nombre_db?schema=public"
   ```

2. **Estructura del proyecto**
   ```
   prisma/
   ├── schema.prisma    # Esquema de la base de datos
   └── migrations/      # Migraciones (se generan automáticamente)
   ```

## Scripts Útiles

Agregar estos scripts a tu `package.json`:

```json
{
  "scripts": {
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "db:reset": "prisma migrate reset",
    "db:seed": "tsx prisma/seed.ts"
  }
}
```

## Comandos Principales

### Generar el Cliente de Prisma

```bash
npm run db:generate
# o
npx prisma generate
```

_Ejecutar cada vez que cambies el esquema_

### Aplicar Cambios del Esquema

```bash
# Para desarrollo - sincroniza el esquema con la BD
npm run db:push
# o
npx prisma db push
```

### Crear y Aplicar Migraciones

```bash
# Para producción - crea archivos de migración
npm run db:migrate
# o
npx prisma migrate dev --name nombre_migracion
```

### Abrir Prisma Studio

```bash
npm run db:studio
# o
npx prisma studio
```

_Interface visual para ver y editar datos_

### Reset de Base de Datos

```bash
npm run db:reset
# o
npx prisma migrate reset
```

_⚠️ Elimina todos los datos_

## Uso en el Código

### Configuración del Cliente

```typescript
// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

### Ejemplos de Consultas

```typescript
import { prisma } from "./lib/prisma";

// Crear usuario
const usuario = await prisma.usuario.create({
  data: {
    nombre: "Juan Pérez",
    correo: "juan@email.com",
  },
});

// Obtener usuarios con roles
const usuarios = await prisma.usuario.findMany({
  include: {
    usuario_rol: {
      include: {
        rol: true,
      },
    },
  },
});

// Crear novedad con archivos
const novedad = await prisma.novedad.create({
  data: {
    descripcion: "Nueva novedad",
    id_usuario: 1,
    id_tipo_novedad: 1,
    archivo_adjunto: {
      create: [
        {
          nombre_archivo: "documento.pdf",
          ruta_archivo: "/uploads/documento.pdf",
        },
      ],
    },
  },
});

// Buscar novedades por estado
const novedadesPendientes = await prisma.novedad.findMany({
  where: {
    estado_novedad: {
      nombre_estado: "Pendiente",
    },
  },
  include: {
    usuario: true,
    tipo_novedad: true,
    archivo_adjunto: true,
  },
});
```

## Datos de Prueba (Seed)

Crear archivo `prisma/seed.ts`:

```typescript
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Crear roles
  const adminRole = await prisma.rol.create({
    data: {
      nombre_rol: "Administrador",
    },
  });

  // Crear tipos de novedad
  const tipoNovedad = await prisma.tipo_novedad.create({
    data: {
      nombre_tipo: "PQR",
      codigo: "PQR001",
    },
  });

  // Crear estados
  const estadoPendiente = await prisma.estado_novedad.create({
    data: {
      nombre_estado: "Pendiente",
    },
  });

  console.log("Datos de prueba creados");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

Ejecutar seed:

```bash
npm run db:seed
```

## Flujo de Trabajo Recomendado

### Para Desarrollo

1. Modificar `schema.prisma`
2. Ejecutar `npm run db:push`
3. Ejecutar `npm run db:generate`
4. Usar en el código

### Para Producción

1. Modificar `schema.prisma`
2. Ejecutar `npm run db:migrate`
3. Ejecutar `npm run db:generate`
4. Aplicar migraciones en producción

## Consideraciones Importantes

- **Siempre ejecutar `prisma generate`** después de cambios en el esquema
- **Usar `db:push` para desarrollo** rápido
- **Usar migraciones para producción** para mantener historial
- **El cliente se regenera automáticamente** con los tipos TypeScript actualizados
- **Cerrar conexiones** con `prisma.$disconnect()` cuando sea necesario

## Troubleshooting

### Error de conexión a la base de datos

- Verificar que PostgreSQL esté ejecutándose
- Revisar la `DATABASE_URL` en el archivo `.env`
- Verificar credenciales y nombre de la base de datos

### Tipos TypeScript no actualizados

```bash
npm run db:generate
```

### Resetear completamente la base de datos

```bash
npm run db:reset
npm run db:seed
```
