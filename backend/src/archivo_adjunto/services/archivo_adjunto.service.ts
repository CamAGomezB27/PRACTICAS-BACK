import { Injectable } from '@nestjs/common';
import { Workbook, Row } from 'exceljs';
import * as path from 'path';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as FormData from 'form-data';
import axios from 'axios';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

interface ResultadoValidacion {
  valido: boolean;
  errores?: string[];
}

@Injectable()
export class ArchivoAdjuntoService {
  constructor(private readonly prisma: PrismaService) {}

  private obtenerArchivoPorSolicitud(titulo: string): string {
    const archivos: Record<string, string> = {
      'Auxilio de transporte': 'SOLICITUDES.xlsx',
      Otros: 'SOLICITUDES.xlsx',
      'Otro Si Definitivo': 'SOLICITUDES.xlsx',
      'Horas Extra': 'SOLICITUDES2.xlsx',
      'Otro Si Temporal': 'SOLICITUDES3.xlsx',
      Vacaciones: 'SOLICITUDES4.xlsx',
    };

    const archivo = archivos[titulo];
    if (!archivo) {
      throw new Error(`No se encontró una plantilla para el título: ${titulo}`);
    }

    return archivo;
  }

  async generarPlantillaExcel(
    titulo: string,
    nombreUsuario: string,
    nombreTienda: string,
    cantidad: number,
  ): Promise<Buffer> {
    try {
      const archivoSolicitud = this.obtenerArchivoPorSolicitud(titulo);

      const basePath = __dirname.includes('dist')
        ? path.resolve(__dirname, '..', '..', '..', 'assets', 'templates')
        : path.resolve(__dirname, '..', '..', 'assets', 'templates');

      const plantillaPath = path.join(basePath, archivoSolicitud);

      // Verificar si el archivo existe
      try {
        await fs.access(plantillaPath);
      } catch {
        throw new Error(
          `La plantilla base no fue encontrada: ${plantillaPath}`,
        );
      }

      const fileBuffer = await fs.readFile(plantillaPath);
      const workbook = new Workbook();
      await workbook.xlsx.load(fileBuffer);
      const worksheet = workbook.getWorksheet(1);

      if (!worksheet) {
        throw new Error('No se pudo leer la hoja de Excel.');
      }

      const filaInicio = 6;

      // Generar las filas
      for (let i = 0; i < cantidad; i++) {
        const rowIndex = filaInicio + i;
        const row = worksheet.getRow(rowIndex);

        // Configurar los valores de las celdas
        row.getCell('A').value = i + 1;

        const fechaCell = row.getCell('B');
        fechaCell.value = new Date();
        fechaCell.numFmt = 'dd/mm/yyyy';

        row.getCell('C').value = '';
        row.getCell('D').value = '';
        row.getCell('E').value = titulo;
        row.getCell('F').value = nombreTienda;
        row.getCell('G').value = nombreUsuario;
        row.getCell('H').value = '';

        row.commit();
      }

      const buffer = await workbook.xlsx.writeBuffer();
      return Buffer.from(buffer);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      console.error('Error generando plantilla Excel:', error);
      throw new Error(`Error al generar la plantilla: ${errorMessage}`);
    }
  }

  async validarArchivoBufferConMicroservicio(
    buffer: Buffer,
  ): Promise<ResultadoValidacion> {
    const tempDir = path.resolve(__dirname, '..', '..', 'temp');

    try {
      // Crear directorio temporal si no existe
      await fs.mkdir(tempDir, { recursive: true });

      const tempPath = path.join(tempDir, `archivo_${Date.now()}.xlsx`);
      await fs.writeFile(tempPath, buffer);

      const resultado = await this.validarArchivoConMicroservicio(tempPath);

      // Limpiar archivo temporal
      try {
        await fs.unlink(tempPath);
      } catch (unlinkError) {
        console.warn('No se pudo eliminar el archivo temporal:', unlinkError);
      }

      return resultado;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      console.error('Error en validación con buffer:', error);
      throw new Error(`Error al validar archivo: ${errorMessage}`);
    }
  }

  async validarArchivoConMicroservicio(
    rutaArchivo: string,
  ): Promise<ResultadoValidacion> {
    try {
      // Verificar que el archivo existe
      await fs.access(rutaArchivo);

      const form = new FormData();
      form.append('file', fsSync.createReadStream(rutaArchivo));

      const response = await axios.post<ResultadoValidacion>(
        'http://localhost:8001/validar/',
        form,
        {
          headers: form.getHeaders(),
          timeout: 30000, // 30 segundos timeout
        },
      );

      return response.data;
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const responseData = error.response?.data as
          | { message?: string }
          | undefined;
        const message = responseData?.message || error.message;
        console.error(`Error HTTP ${status}: ${message}`);
        throw new Error(`Error del microservicio: ${message}`);
      }

      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      console.error('Error al validar el archivo:', error);
      throw new Error(
        `Error al conectarse con el microservicio de validación: ${errorMessage}`,
      );
    }
  }

  async procesarYGuardarExcel(
    buffer: Buffer,
    id_novedad: number,
  ): Promise<void> {
    try {
      const workbook = new Workbook();
      await workbook.xlsx.load(buffer);
      const sheet = workbook.getWorksheet(1);

      if (!sheet) {
        throw new Error('No se pudo acceder a la hoja de Excel.');
      }

      const filas: Omit<
        Prisma.DetalleNovedadMasivaUncheckedCreateInput,
        'id_detalle'
      >[] = [];

      // Procesar filas desde la 6 hasta la última con datos
      for (let rowIndex = 6; rowIndex <= sheet.rowCount; rowIndex++) {
        const row = sheet.getRow(rowIndex);

        if (!row || !this.tieneContenido(row)) {
          continue;
        }

        const filaData = this.procesarFila(row, id_novedad);
        if (filaData) {
          filas.push(filaData);
        }
      }

      if (filas.length === 0) {
        throw new Error('El archivo no contiene filas válidas para importar.');
      }

      // Guardar en la base de datos
      await this.prisma.detalleNovedadMasiva.createMany({
        data: filas,
        skipDuplicates: true, // Evitar duplicados
      });

      console.log(`Se procesaron ${filas.length} filas correctamente`);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      console.error('Error procesando Excel:', error);
      throw new Error(`Error al procesar el archivo: ${errorMessage}`);
    }
  }

  private tieneContenido(row: Row): boolean {
    if (!row.values || !Array.isArray(row.values)) {
      return false;
    }

    return row.values.some((val) => {
      if (val === null || val === undefined || val === '') {
        return false;
      }

      if (typeof val === 'string') {
        return val.trim() !== '';
      }

      if (typeof val === 'object') {
        // Para objetos complejos de Excel, convertir a string de forma segura
        try {
          const str = JSON.stringify(val);
          return str !== '{}' && str !== 'null';
        } catch {
          return false;
        }
      }

      return true;
    });
  }

  private procesarFila(
    row: Row,
    id_novedad: number,
  ): Omit<
    Prisma.DetalleNovedadMasivaUncheckedCreateInput,
    'id_detalle'
  > | null {
    try {
      return {
        id_novedad,
        n: this.convertirAEntero(row.getCell('A').value) ?? 0,
        fecha: this.convertirAFecha(row.getCell('B').value),
        cedula: this.getCellValue(row, 'C') || 'NO APLICA',
        nombre: this.getCellValue(row, 'D') || 'NO APLICA',
        categoria: this.getCellValue(row, 'E') || 'NO APLICA',
        tienda: this.getCellValue(row, 'F') || 'NO APLICA',
        jefe: this.getCellValue(row, 'G') || 'NO APLICA',
        detalle: this.getCellValue(row, 'H') || 'NO APLICA',
        jornada_empleado: this.getCellValue(row, 'I') || 'NO APLICA',
        jornada_otro_si: this.getCellValue(row, 'J') || 'NO APLICA',
        fecha_inicio: this.convertirAFecha(row.getCell('K').value),
        fecha_fin: this.convertirAFecha(row.getCell('L').value),
        salario_actual: this.convertirANumero(row.getCell('M').value) ?? 0,
        salario_otro_si: this.convertirANumero(row.getCell('N').value) ?? 0,
        consecutivo_forms: this.getCellValue(row, 'O') || 'NO APLICA',
        concepto: this.getCellValue(row, 'P') || 'NO APLICA',
        codigo_concepto: this.getCellValue(row, 'Q') || 'NO APLICA',
        unidades: this.convertirAEntero(row.getCell('R').value) ?? 0,
        fecha_novedad: this.convertirAFecha(row.getCell('S').value),
        fecha_inicio_disfrute: this.convertirAFecha(row.getCell('T').value),
        fecha_fin_disfrute: this.convertirAFecha(row.getCell('U').value),
        responsable_validacion: '',
        respuesta_validacion: '',
        ajuste: '',
        fecha_pago: null,
        area_responsable: '',
        categoria_inconsistencia: '',
      };
    } catch (error) {
      console.error(`Error procesando fila ${row.number}:`, error);
      return null;
    }
  }

  private convertirAFecha(valor: unknown): Date | null {
    if (!valor) return null;

    if (valor instanceof Date) {
      return isNaN(valor.getTime()) ? null : valor;
    }

    if (typeof valor === 'string') {
      const fecha = new Date(valor);
      return isNaN(fecha.getTime()) ? null : fecha;
    }

    if (typeof valor === 'number') {
      // Manejar fechas de Excel (número de días desde 1900)
      if (valor > 25000 && valor < 100000) {
        const fecha = new Date((valor - 25569) * 86400 * 1000);
        return isNaN(fecha.getTime()) ? null : fecha;
      }

      const fecha = new Date(valor);
      return isNaN(fecha.getTime()) ? null : fecha;
    }

    return null;
  }

  private convertirAEntero(valor: unknown): number | null {
    if (!valor && valor !== 0) return null;

    if (typeof valor === 'number') {
      return Math.floor(valor);
    }

    if (typeof valor === 'string') {
      const num = parseInt(valor, 10);
      return isNaN(num) ? null : num;
    }

    return null;
  }

  private convertirANumero(valor: unknown): number | null {
    if (!valor && valor !== 0) return null;

    if (typeof valor === 'number') {
      return valor;
    }

    if (typeof valor === 'string') {
      const num = parseFloat(valor);
      return isNaN(num) ? null : num;
    }

    return null;
  }

  private getCellValue(row: Row, col: string): string {
    try {
      const cell = row.getCell(col);
      if (!cell) return 'NO APLICA';

      const value = cell.value;
      if (!value && value !== 0) return 'NO APLICA';

      // Manejar diferentes tipos de valores de celda
      if (typeof value === 'string') {
        return value.trim() || 'NO APLICA';
      }

      if (typeof value === 'number') {
        return String(value);
      }

      if (typeof value === 'boolean') {
        return value ? 'SI' : 'NO';
      }

      if (typeof value === 'object') {
        // Definir tipos específicos para valores de celdas de Excel
        interface RichTextValue {
          richText: Array<{ text?: string }>;
        }

        interface HyperlinkValue {
          text: unknown;
        }

        interface FormulaValue {
          result: unknown;
        }

        // Manejar rich text
        if (value && 'richText' in value) {
          const richTextValue = value as RichTextValue;
          if (Array.isArray(richTextValue.richText)) {
            const text = richTextValue.richText
              .map((segment) => segment.text || '')
              .join('')
              .trim();
            return text || 'NO APLICA';
          }
        }

        // Manejar hyperlinks
        if (value && 'text' in value) {
          const hyperlinkValue = value as HyperlinkValue;
          return String(hyperlinkValue.text).trim() || 'NO APLICA';
        }

        // Manejar fórmulas
        if (value && 'result' in value) {
          const formulaValue = value as FormulaValue;
          return String(formulaValue.result).trim() || 'NO APLICA';
        }
      }

      // Conversión segura para objetos complejos
      let stringValue: string;
      try {
        if (typeof value === 'object' && value !== null) {
          stringValue = JSON.stringify(value);
        } else {
          stringValue = String(value);
        }
      } catch {
        return 'NO APLICA';
      }

      return stringValue.trim() || 'NO APLICA';
    } catch (error: unknown) {
      console.error(`Error obteniendo valor de celda ${col}:`, error);
      return 'NO APLICA';
    }
  }
}
