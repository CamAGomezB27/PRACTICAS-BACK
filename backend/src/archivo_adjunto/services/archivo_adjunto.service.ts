import { Injectable } from '@nestjs/common';
import { Workbook, Row } from 'exceljs';
import * as path from 'path';
import * as fs from 'fs/promises';
import * as fsSync from 'fs';
import * as FormData from 'form-data';
import axios from 'axios';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

interface RespuestaExitosa {
  esMasiva: boolean;
  cantidadSolicitudes: number;
}

interface Solicitud {
  fecha: Date;
  cedula: string;
  nombre: string;
  categoria: string;
  tienda: string;
  jefe: string;
  detalle: string;
}

interface SolicitudConIdDetalle extends Solicitud {
  id_novedad: number;
  n: number;
  jornada_empleado: string;
  jornada_otro_si: string;
  fecha_inicio: Date | null;
  fecha_fin: Date | null;
  salario_actual: number;
  salario_otro_si: number;
  consecutivo_forms: string;
  concepto: string;
  codigo_concepto: string;
  unidades: number;
  fecha_novedad: Date | null;
  fecha_inicio_disfrute: Date | null;
  fecha_fin_disfrute: Date | null;
  responsable_validacion: string;
  respuesta_validacion: string;
  ajuste: string;
  fecha_pago: Date | null;
  area_responsable: string;
  categoria_inconsistencia: string;
}

type RespuestaMicroservicio = string[] | RespuestaExitosa;
interface ResultadoValidacion {
  valido: boolean;
  errores?: string[];
  cantidadSolicitudes?: number;
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
      await fs.access(rutaArchivo);

      const form = new FormData();
      form.append('file', fsSync.createReadStream(rutaArchivo));

      const response = await axios.post<RespuestaMicroservicio>(
        'http://localhost:8001/validar/',
        form,
        {
          headers: form.getHeaders(),
          timeout: 30000,
        },
      );

      const data = response.data;

      // son errores
      if (Array.isArray(data)) {
        return {
          valido: false,
          errores: data,
        };
      }

      //  todo está bien y nos devuelve la info masiva
      return {
        valido: true,
        cantidadSolicitudes: data.cantidadSolicitudes,
      };
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
      // 👇 Intentamos parsear formato tipo "23/06/2025"
      const partes = valor.split('/');
      if (partes.length === 3) {
        const dia = parseInt(partes[0], 10);
        const mes = parseInt(partes[1], 10) - 1; // los meses en JS van de 0 a 11
        const anio = parseInt(partes[2], 10);
        const fecha = new Date(anio, mes, dia);
        return isNaN(fecha.getTime()) ? null : fecha;
      }

      // Fallback: intentar parseo normal
      const fecha = new Date(valor);
      return isNaN(fecha.getTime()) ? null : fecha;
    }

    if (typeof valor === 'number') {
      // Fechas en formato Excel
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

  // Helpers de “seguridad” para cada tipo
  private safeString(v: string | null | undefined): string {
    return v && v.trim() !== '' ? v : 'NO APLICA';
  }

  private safeDate(v: Date | string | null | undefined): string {
    if (!v) return '-';
    const d = typeof v === 'string' ? new Date(v) : v;
    return isNaN(d.getTime()) ? '-' : d.toLocaleDateString('es-CO');
  }

  private safeNumber(v: number | null | undefined): number {
    return typeof v === 'number' && !isNaN(v) ? v : 0;
  }

  async generarConsolidadoPostNomina(
    solicitudes: SolicitudConIdDetalle[],
  ): Promise<Buffer> {
    const archivoBase = 'Consolidado_PostNomina_Cierre.xlsx';
    const basePath = __dirname.includes('dist')
      ? path.resolve(__dirname, '..', '..', '..', 'assets', 'templates')
      : path.resolve(__dirname, '..', '..', 'assets', 'templates');
    const plantillaPath = path.join(basePath, archivoBase);

    // helpers “seguros”
    const safeString = (v?: string) => (v && v.trim() !== '' ? v : 'NO APLICA');
    const safeNumber = (v?: number) =>
      typeof v === 'number' && !isNaN(v) ? v : 0;

    // carga plantilla
    await fs.access(plantillaPath);
    const buf = await fs.readFile(plantillaPath);
    const workbook = new Workbook();
    await workbook.xlsx.load(buf);
    const sheet = workbook.getWorksheet(1);
    if (!sheet) throw new Error('No se pudo cargar la hoja');

    const filaInicio = 7;
    solicitudes.forEach((orig, idx) => {
      const row = sheet.getRow(filaInicio + idx);

      // ID y N
      row.getCell('A').value = safeNumber(orig.id_novedad);
      row.getCell('B').value = safeNumber(orig.n);

      // Fecha (col C)
      if (orig.fecha instanceof Date && !isNaN(orig.fecha.getTime())) {
        row.getCell('C').value = orig.fecha;
        row.getCell('C').numFmt = 'dd/mm/yyyy';
      } else {
        row.getCell('C').value = '-';
      }

      // Texto sencillo
      row.getCell('D').value = safeString(orig.cedula);
      row.getCell('E').value = safeString(orig.nombre);
      row.getCell('F').value = safeString(orig.categoria);
      row.getCell('G').value = safeString(orig.tienda);
      row.getCell('H').value = safeString(orig.jefe);
      row.getCell('I').value = safeString(orig.detalle);

      // Jornada y demás strings
      row.getCell('J').value = safeString(orig.jornada_empleado);
      row.getCell('K').value = safeString(orig.jornada_otro_si);

      // Fecha Inicio (col L)
      if (
        orig.fecha_inicio instanceof Date &&
        !isNaN(orig.fecha_inicio.getTime())
      ) {
        row.getCell('L').value = orig.fecha_inicio;
        row.getCell('L').numFmt = 'dd/mm/yyyy';
      } else {
        row.getCell('L').value = '-';
      }

      // Fecha Fin (col M)
      if (orig.fecha_fin instanceof Date && !isNaN(orig.fecha_fin.getTime())) {
        row.getCell('M').value = orig.fecha_fin;
        row.getCell('M').numFmt = 'dd/mm/yyyy';
      } else {
        row.getCell('M').value = '-';
      }

      // Números
      row.getCell('N').value = safeNumber(orig.salario_actual);
      row.getCell('O').value = safeNumber(orig.salario_otro_si);

      // Strings
      row.getCell('P').value = safeString(orig.consecutivo_forms);
      row.getCell('Q').value = safeString(orig.concepto);
      row.getCell('R').value = safeString(orig.codigo_concepto);

      // Unidades
      row.getCell('S').value = safeNumber(orig.unidades);

      // Fecha novedad (col T)
      if (
        orig.fecha_novedad instanceof Date &&
        !isNaN(orig.fecha_novedad.getTime())
      ) {
        row.getCell('T').value = orig.fecha_novedad;
        row.getCell('T').numFmt = 'dd/mm/yyyy';
      } else {
        row.getCell('T').value = '-';
      }

      // Fecha disfrute inicio (U)
      if (
        orig.fecha_inicio_disfrute instanceof Date &&
        !isNaN(orig.fecha_inicio_disfrute.getTime())
      ) {
        row.getCell('U').value = orig.fecha_inicio_disfrute;
        row.getCell('U').numFmt = 'dd/mm/yyyy';
      } else {
        row.getCell('U').value = '-';
      }

      // Fecha disfrute fin (V)
      if (
        orig.fecha_fin_disfrute instanceof Date &&
        !isNaN(orig.fecha_fin_disfrute.getTime())
      ) {
        row.getCell('V').value = orig.fecha_fin_disfrute;
        row.getCell('V').numFmt = 'dd/mm/yyyy';
      } else {
        row.getCell('V').value = '-';
      }

      // Validaciones y ajuste
      row.getCell('W').value = safeString(orig.responsable_validacion);
      row.getCell('X').value = safeString(orig.respuesta_validacion);
      row.getCell('Y').value = safeString(orig.ajuste);

      // Fecha pago (Z)
      if (
        orig.fecha_pago instanceof Date &&
        !isNaN(orig.fecha_pago.getTime())
      ) {
        row.getCell('Z').value = orig.fecha_pago;
        row.getCell('Z').numFmt = 'dd/mm/yyyy';
      } else {
        row.getCell('Z').value = '-';
      }

      // Resto de strings
      row.getCell('AA').value = safeString(orig.area_responsable);
      row.getCell('AB').value = safeString(orig.categoria_inconsistencia);

      row.commit();
    });

    const finalBuf = await workbook.xlsx.writeBuffer();
    return Buffer.from(finalBuf);
  }

  async obtenerSolicitudesConsolidado(
    id_novedad: number,
  ): Promise<SolicitudConIdDetalle[]> {
    const solicitudes = await this.prisma.detalleNovedadMasiva.findMany({
      where: { id_novedad },
      orderBy: { n: 'asc' },
    });

    return solicitudes.map((s) => {
      if (!s.fecha) {
        throw new Error(
          `La solicitud con id ${s.id_detalle} no tiene fecha asignada`,
        );
      }

      return {
        ...s,
        fecha: s.fecha, // Garantizado no null
        n: s.n ?? 0,
        jornada_empleado: s.jornada_empleado ?? '',
        jornada_otro_si: s.jornada_otro_si ?? '',
        salario_actual: s.salario_actual ?? 0,
        salario_otro_si: s.salario_otro_si ?? 0,
        consecutivo_forms: s.consecutivo_forms ?? '',
        concepto: s.concepto ?? '',
        codigo_concepto: s.codigo_concepto ?? '',
        unidades: s.unidades ?? 0,
        responsable_validacion: s.responsable_validacion ?? '',
        respuesta_validacion: s.respuesta_validacion ?? '',
        ajuste: s.ajuste ?? '',
        area_responsable: s.area_responsable ?? '',
        categoria_inconsistencia: s.categoria_inconsistencia ?? '',
        detalle: s.detalle ?? '',
        cedula: s.cedula ?? '',
        nombre: s.nombre ?? '',
        categoria: s.categoria ?? '',
        tienda: s.tienda ?? '',
        jefe: s.jefe ?? '',
        fecha_inicio: s.fecha_inicio,
        fecha_fin: s.fecha_fin,
        fecha_novedad: s.fecha_novedad,
        fecha_inicio_disfrute: s.fecha_inicio_disfrute,
        fecha_fin_disfrute: s.fecha_fin_disfrute,
        fecha_pago: s.fecha_pago,
      };
    });
  }
}
