import { Injectable } from '@nestjs/common';
import { Workbook } from 'exceljs';
import * as path from 'path';
import * as fs from 'fs';

@Injectable()
export class ArchivoAdjuntoService {
  async generarPlantillaExcel(
    titulo: string,
    nombreUsuario: string,
  ): Promise<Buffer> {
    const plantillaPath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'templates',
      'SOLICITUDES.xlsx',
    );

    // Validar si el archivo existe
    if (!fs.existsSync(plantillaPath)) {
      throw new Error(
        'La plantilla base no fue encontrada en la ruta esperada.',
      );
    }

    const workbook = new Workbook();
    await workbook.xlsx.readFile(plantillaPath);

    const worksheet = workbook.getWorksheet(1); // Primera hoja
    const filaInicio = 5;

    if (!worksheet) {
      throw new Error('No se pudo leer la hoja de Excel.');
    }

    const row = worksheet.getRow(filaInicio);

    // 1 == A
    row.getCell(1).value = 1; // N
    row.getCell(2).value = new Date(); // Fecha de reporte
    // 3 = Cédula (a mano)
    // 4 = Nombre (a mano)
    row.getCell(5).value = titulo; // Categoría
    // 6 = Tienda (en blanco)
    row.getCell(7).value = nombreUsuario; // Quien reporta la novedad
    // 8 = Detalle (a mano)

    row.commit(); // Guardar cambios en esa fila

    const buffer = await workbook.xlsx.writeBuffer();

    return Buffer.from(buffer);
  }
}
