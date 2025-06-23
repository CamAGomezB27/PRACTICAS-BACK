import { Injectable } from '@nestjs/common';
import { Workbook } from 'exceljs';
import * as path from 'path';
import * as fs from 'fs';
import * as FormData from 'form-data';
import axios from 'axios';

interface ResultadoValidacion {
  valido: boolean;
  errores?: string[];
}

@Injectable()
export class ArchivoAdjuntoService {
  private obtenerArchivoPorSolicitud(titulo: string): string {
    if (
      titulo === 'Auxilio de transporte' ||
      titulo === 'Otros' ||
      titulo === 'Otro Si Definitivo'
    ) {
      return 'SOLICITUDES.xlsx';
    } else if (titulo === 'Horas Extra') {
      return 'SOLICITUDES2.xlsx';
    } else if (titulo === 'Otro Si Temporal') {
      return 'SOLICITUDES3.xlsx';
    } else if (titulo === 'Vacaciones') {
      return 'SOLICITUDES4.xlsx';
    } else {
      throw new Error(`No se encontró una plantilla para el título: ${titulo}`);
    }
  }
  async generarPlantillaExcel(
    titulo: string,
    nombreUsuario: string,
    nombreTienda: string,
    cantidad: number,
  ): Promise<Buffer> {
    const archivoSolicitud = this.obtenerArchivoPorSolicitud(titulo);

    const basePath = __dirname.includes('dist')
      ? path.resolve(__dirname, '..', '..', '..', 'assets', 'templates')
      : path.resolve(__dirname, '..', '..', 'assets', 'templates');

    const plantillaPath = path.join(basePath, archivoSolicitud);

    console.log('Buscando plantilla en:', plantillaPath);

    if (!fs.existsSync(plantillaPath)) {
      throw new Error(
        'La plantilla base no fue encontrada en la ruta esperada.',
      );
    }

    const fileBuffer = fs.readFileSync(plantillaPath);
    const workbook = new Workbook();
    await workbook.xlsx.load(fileBuffer);
    const worksheet = workbook.getWorksheet(1); // Primera hoja

    if (!worksheet) {
      throw new Error('No se pudo leer la hoja de Excel.');
    }

    // Las cabeceras están en la fila 5, entonces escribimos en la fila 6
    const filaParaModificar = 6;

    console.log('Título:', titulo);
    console.log('NombreUsuario:', nombreUsuario);

    for (let i = 0; i < cantidad; i++) {
      const rowIndex = filaParaModificar + i;
      const row = worksheet.getRow(rowIndex);

      // Mapeo correcto según las cabeceras de tu plantilla:
      // A = N, B = FECHA DE REPORTE, C = CEDULA, D = NOMBRE, E = CATEGORIA, F = TIENDA, G = QUIEN REPORTA, H = DETALLE NOVEDAD

      row.getCell('A').value = null; // Limpia antes
      row.getCell('A').value = i + 1; // N (columna A)

      // FECHA DE REPORTE (columna B)
      const fechaCell = row.getCell('B');
      fechaCell.value = new Date();
      fechaCell.numFmt = 'dd/mm/yyyy';

      row.getCell('C').value = ''; // CEDULA (vacío por ahora)
      row.getCell('D').value = ''; // NOMBRE (vacío por ahora)
      row.getCell('E').value = titulo; // CATEGORIA (aquí va el título que recibes)
      row.getCell('F').value = nombreTienda; // TIENDA DEL JEFE
      row.getCell('G').value = nombreUsuario; // QUIEN REPORTA LA NOVEDAD
      row.getCell('H').value = ''; // DETALLE NOVEDAD (vacío por ahora)

      row.commit();
    }
    console.log('🧾 Generando plantilla para tienda:', nombreTienda);

    const buffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
  }

  async validarArchivoBufferConMicroservicio(
    buffer: Buffer,
  ): Promise<ResultadoValidacion> {
    const fs = await import('fs/promises');
    const tempDir = path.resolve(__dirname, '..', '..', 'temp');
    await fs.mkdir(tempDir, { recursive: true });

    const tempPath = path.join(tempDir, 'archivo.xlsx');
    await fs.writeFile(tempPath, buffer);

    const resultado = await this.validarArchivoConMicroservicio(tempPath);

    await fs.unlink(tempPath);
    return resultado;
  }

  async validarArchivoConMicroservicio(
    rutaArchivo: string,
  ): Promise<ResultadoValidacion> {
    const form = new FormData();
    form.append('file', fs.createReadStream(rutaArchivo));

    try {
      const response = await axios.post<ResultadoValidacion>(
        'http://localhost:8001/validar/',
        form,
        {
          headers: form.getHeaders(),
        },
      );
      return response.data;
    } catch (error) {
      console.error('Error al validar el archivo:', error);
      throw new Error('Error al conectarse con el microservicio de validación');
    }
  }
}
