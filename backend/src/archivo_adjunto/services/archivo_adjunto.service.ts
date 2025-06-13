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
    const basePath = __dirname.includes('dist')
      ? path.resolve(__dirname, '..', '..', '..', 'assets', 'templates')
      : path.resolve(__dirname, '..', '..', 'assets', 'templates');
    const plantillaPath = path.join(basePath, 'SOLICITUDES.xlsx');

    console.log('Buscando plantilla en:', plantillaPath);

    if (!fs.existsSync(plantillaPath)) {
      throw new Error(
        'La plantilla base no fue encontrada en la ruta esperada.',
      );
    }

    const workbook = new Workbook();
    await workbook.xlsx.readFile(plantillaPath);
    const worksheet = workbook.getWorksheet(1); // Primera hoja

    if (!worksheet) {
      throw new Error('No se pudo leer la hoja de Excel.');
    }

    // Las cabeceras están en la fila 5, entonces escribimos en la fila 6
    const filaParaModificar = 6;

    console.log('Título:', titulo);
    console.log('NombreUsuario:', nombreUsuario);

    const row = worksheet.getRow(filaParaModificar);

    // Mapeo correcto según las cabeceras de tu plantilla:
    // A = N, B = FECHA DE REPORTE, C = CEDULA, D = NOMBRE, E = CATEGORIA, F = TIENDA, G = QUIEN REPORTA, H = DETALLE NOVEDAD

    row.getCell('A').value = 1; // N (columna A)

    // FECHA DE REPORTE (columna B)
    const fechaCell = row.getCell('B');
    fechaCell.value = new Date();
    fechaCell.numFmt = 'dd/mm/yyyy';

    row.getCell('C').value = ''; // CEDULA (vacío por ahora)
    row.getCell('D').value = ''; // NOMBRE (vacío por ahora)
    row.getCell('E').value = titulo; // CATEGORIA (aquí va el título que recibes)
    row.getCell('F').value = ''; // TIENDA (vacío por ahora)
    row.getCell('G').value = nombreUsuario; // QUIEN REPORTA LA NOVEDAD
    row.getCell('H').value = ''; // DETALLE NOVEDAD (vacío por ahora)

    row.commit();

    const buffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
  }
}
