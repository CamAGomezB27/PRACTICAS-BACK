export function getMensajePorEstadoBackendPorId(
  idEstado: number,
  user: { esNomina: boolean; esJefe: boolean },
): string {
  if (user.esNomina) {
    switch (idEstado) {
      case 1: // 'PENDIENTE' para Nómina
        return 'Solicitud recibida. Aún no ha sido gestionada.';
      case 2: // 'EN GESTIÓN'
        return 'Se está gestionando esta novedad.';
      case 3: // 'GESTIONADA'
        return 'Validación completada. Esta novedad ya fue gestionada.';
      default:
        return '';
    }
  } else if (user.esJefe) {
    switch (idEstado) {
      case 1:
        return 'Archivo subido correctamente. Tu solicitud está lista para ser validada por el equipo de Nómina.';
      case 2:
        return 'El equipo de Nómina se encuentra validando tus solicitudes de esta novedad.';
      case 3:
        return 'El equipo de Nómina ya validó tu novedad. Verifica si hay anotaciones o comentarios.';
      default:
        return '';
    }
  }
  return '';
}
