export function getMensajePorEstadoBackend(
  estado: string,
  esNomina: boolean,
): string {
  if (esNomina) {
    switch (estado) {
      case 'CREADA':
      case 'PENDIENTE':
        return 'Solicitud recibida. Aún no ha sido gestionada.';
      case 'EN GESTIÓN':
        return 'Se está gestionando esta novedad.';
      case 'GESTIONADA':
        return 'Validación completada. Esta novedad ya fue gestionada.';
      default:
        return '';
    }
  } else {
    switch (estado) {
      case 'CREADA':
      case 'PENDIENTE':
        return 'Archivo subido correctamente. Tu solicitud está lista para ser validada por el equipo de Nómina.';
      case 'EN GESTIÓN':
        return 'El equipo de Nómina se encuentra validando tus solicitudes de esta novedad.';
      case 'GESTIONADA':
        return 'El equipo de Nómina ya validó tu novedad. Verifica si hay anotaciones o comentarios.';
      default:
        return '';
    }
  }
}
