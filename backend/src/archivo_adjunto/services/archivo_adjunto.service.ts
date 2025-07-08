import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import axios from 'axios';
import { Row, Workbook } from 'exceljs';
import * as FormData from 'form-data';
import * as fsSync from 'fs';
import * as fs from 'fs/promises';
import * as path from 'path';
import { PrismaService } from 'prisma/prisma.service';

interface Solicitud {
  fecha: Date | string;
  cedula: number;
  nombre: string;
  categoria: string;
  tienda: string;
  jefe: string;
  detalle: string;
}

export interface SolicitudConIdDetalle extends Solicitud {
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
  codigo_concepto: number;
  unidades: number;
  fecha_novedad: Date | null;
  dias_a_tomar: number;
  fecha_inicio_disfrute: Date | null;
  fecha_fin_disfrute: Date | null;
  responsable_validacion: string;
  respuesta_validacion: string;
  ajuste: string;
  fecha_pago: Date | null;
  area_responsable: string;
  categoria_inconsistencia: string;
}

type RespuestaMicroservicio =
  | { valido: true; esMasiva: boolean; cantidadSolicitudes: number }
  | { valido: false; errores: string[] };

type FilaDB = Omit<
  Prisma.DetalleNovedadMasivaUncheckedCreateInput,
  'id_detalle'
>;

export interface ResultadoValidacion {
  valido: boolean;
  errores?: string[];
  cantidadSolicitudes?: number;
}

interface FilaParaExportar {
  id: number;
  numero: number;
  fecha: string;
  cedula: number;
  nombre: string;
  categoria: string;
  tienda: string;
  jefe: string;
  detalle: string;
  jornadaEmAc: string;
  jornadaOtrSiTem: string;
  fechainicio: string;
  fechafin: string;
  salarioActual: number;
  salarioOtroSiTemp: number;
  consForms: string;
  concepto: string;
  codigo: number;
  unidades: number;
  fechaNove: string;
  diasATomar: number;
  fechInicioDisfrute: string;
  fechaFinDisfrute: string;
  ResponsableValidacion: string;
  RespuestaValidacion: string;
  ajuste: string;
  Fechapago: string;
  AreaRespon: string;
  CategInconsitencia: string;
}

interface CrearNovedadIndividual {
  //BASICOS
  cedula: number;
  nombre: string;
  detalle: string;
  titulo: string;
  categoria?: string;
  tienda?: string;
  jefe?: string;
  fecha?: string; // 👈 importante para el registro base

  // Para Vacaciones

  dias?: number;

  // Para Horas Extra
  concepto?: string;
  codigo?: string;
  unidad?: string;

  // para Otro Si Temporal
  jornada_actual?: string;
  nueva_jornada?: string;

  salario_actual?: number;
  nuevo_salario?: number;
  consecutivo?: string;

  //LOS QUE SE REPITEN
  fecha_inicio?: string;
  fecha_fin?: string;
  fecha_novedad?: string;
}

@Injectable()
export class ArchivoAdjuntoService {
  constructor(private readonly prisma: PrismaService) {}

  private obtenerArchivoPorSolicitud(titulo: string): string {
    const archivos: Record<string, string> = {
      'Auxilio de transporte': 'SOLICITUDES.xlsx',
      Descuento: 'SOLICITUDES.xlsx',
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
        const hoy = new Date();
        const fechaLocal = new Date(
          hoy.getFullYear(),
          hoy.getMonth(),
          hoy.getDate(),
        );
        fechaCell.value = fechaLocal;
        fechaCell.numFmt = 'dd/mm/yyyy';

        console.log('📝 Fecha escrita en plantilla:', fechaLocal.toISOString());

        row.getCell('E').value = titulo;
        row.getCell('F').value = nombreTienda;
        row.getCell('G').value = nombreUsuario;

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
    tipo: string,
    titulo: string,
    nombreUsuario: string,
    nombreTienda: string,
    jwtToken: string, // <--- nuevo
  ): Promise<ResultadoValidacion> {
    try {
      const form = new FormData();
      form.append('file', buffer, {
        filename: 'archivo.xlsx',
        contentType:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      form.append('tipo', tipo);
      form.append('titulo', titulo);
      form.append('nombreUsuario', nombreUsuario);
      form.append('nombreTienda', nombreTienda);

      const response = await axios.post(
        'http://localhost:8001/validar/',
        form,
        {
          headers: {
            ...form.getHeaders(),
            Authorization: `Bearer ${jwtToken}`, // 🔥 ENVÍAS TOKEN EN EL HEADER
          },
          timeout: 30000,
        },
      );

      // ✅ Aseguramos el tipo manualmente
      const data = response.data as RespuestaMicroservicio;

      if (data.valido === false) {
        return {
          valido: false,
          errores: data.errores ?? ['Archivo no válido'],
        };
      }

      if (data.valido === true) {
        return {
          valido: true,
          cantidadSolicitudes: data.cantidadSolicitudes ?? 0,
        };
      }

      // fallback defensivo
      return {
        valido: false,
        errores: ['Respuesta inesperada del microservicio'],
      };
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      console.error(
        '❌ Error al validar el archivo desde buffer:',
        errorMessage,
      );

      return {
        valido: false,
        errores: [errorMessage],
      };
    }
  }

  async validarArchivoConMicroservicio(
    rutaArchivo: string,
  ): Promise<ResultadoValidacion> {
    try {
      await fs.access(rutaArchivo);

      const form = new FormData();
      form.append('file', fsSync.createReadStream(rutaArchivo));

      const response = await axios.post(
        'http://localhost:8001/validar/',
        form,
        {
          headers: form.getHeaders(),
          timeout: 30000,
        },
      );

      const data = response.data as RespuestaMicroservicio;

      if ('valido' in data && data.valido === false) {
        return {
          valido: false,
          errores: data.errores ?? ['Archivo no válido'],
        };
      }

      if ('valido' in data && data.valido === true) {
        return {
          valido: true,
          cantidadSolicitudes: data.cantidadSolicitudes ?? 0,
        };
      }

      return {
        valido: false,
        errores: ['Respuesta inesperada del microservicio'],
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

  private asignarValorSeguro(
    fila: FilaDB,
    key: keyof FilaDB,
    valor: unknown,
  ): void {
    const ref = fila as Record<string, unknown>;

    if (key.includes('fecha')) {
      ref[key] = this.convertirAFecha(valor);
    } else if (['n', 'unidades'].includes(key)) {
      ref[key] = this.convertirAEntero(valor) ?? 0;
    } else if (['salario_actual', 'salario_otro_si'].includes(key)) {
      ref[key] = this.convertirANumero(valor) ?? 0;
    } else if (typeof valor === 'string') {
      ref[key] = valor.trim();
    } else if (typeof valor === 'number' || typeof valor === 'boolean') {
      ref[key] = valor;
    } else {
      ref[key] = '';
    }
  }

  async procesarYGuardarExcel(
    buffer: Buffer,
    id_novedad: number,
  ): Promise<void> {
    try {
      const workbook = new Workbook();
      await workbook.xlsx.load(buffer);
      console.log('✅ Archivo Excel cargado correctamente');

      const sheet = workbook.getWorksheet(1);
      if (!sheet) throw new Error('❌ No se pudo acceder a la hoja de Excel.');
      console.log('✅ Hoja de Excel obtenida:', sheet.name);

      const filas: FilaDB[] = [];

      const encabezadosToCamposBD: Record<string, keyof FilaDB> = {
        N: 'n',
        'FECHA DE REPORTE': 'fecha',
        CEDULA: 'cedula',
        'NOMBRE (Apellidos-Nombres)': 'nombre',
        CATEGORIA: 'categoria',
        TIENDA: 'tienda',
        'QUIEN REPORTA LA NOVEDAD\n(Nombre Jefe GH)': 'jefe',
        'DETALLE NOVEDAD': 'detalle',
        'JORNADA EMPLEADO': 'jornada_empleado',
        'JORNADA OTRO SI TEMPORAL': 'jornada_otro_si',
        'FECHA INICIO': 'fecha_inicio',
        'FECHA FIN': 'fecha_fin',
        'SALARIO ACTUAL': 'salario_actual',
        'SALARIO OTRO SI TEMPORAL': 'salario_otro_si',
        'CONSECUTIVO FORMS': 'consecutivo_forms',
        CONCEPTO: 'concepto',
        CON_CODIGO: 'codigo_concepto',
        UNIDADES: 'unidades',
        'FECHA NOVEDAD': 'fecha_novedad',
        'DIAS A TOMAR': 'dias_a_tomar',
        'FECHA INICIO DISFRUTE': 'fecha_inicio_disfrute',
        'FECHA FIN DISFRUTE': 'fecha_fin_disfrute',
        'RESPONSABLE VALIDACIÓN': 'responsable_validacion',
        'RESPUESTA RESULTADO DE VALIDACIÓN': 'respuesta_validacion',
        'AJUSTE SI/NO': 'ajuste',
        'FECHA DE AJUSTE/PAGO': 'fecha_pago',
        'ÁREA RESPONSABLE INCONSISTENCIA / ACLARACIÓN': 'area_responsable',
        'CATEGORIA GENERAL INCONSISTENCIA': 'categoria_inconsistencia',
      };

      const headerRow = sheet.getRow(5);
      const headerMap: Record<string, number> = {};

      headerRow.eachCell((cell, colNumber) => {
        console.log(`📌 Columna ${colNumber}:`, cell.value);
        const texto = typeof cell.value === 'string' ? cell.value.trim() : '';
        const campoBD = encabezadosToCamposBD[texto];
        if (campoBD) {
          headerMap[campoBD] = colNumber;
          console.log(
            `📌 Encabezado "${texto}" mapeado a "${campoBD}" en columna ${colNumber}`,
          );
        }
      });

      console.log('🧠 Mapa completo de encabezados:', headerMap);

      for (let rowIndex = 6; rowIndex <= sheet.rowCount; rowIndex++) {
        const row = sheet.getRow(rowIndex);
        if (!this.tieneContenido(row)) continue;

        console.log(`📄 Procesando fila ${rowIndex}`);

        const fila: FilaDB = {
          id_novedad,
          n: 0,
          fecha: null,
          cedula: null,
          nombre: '-',
          categoria: '-',
          tienda: '-',
          jefe: '-',
          detalle: '-',
          jornada_empleado: '-',
          jornada_otro_si: '-',
          fecha_inicio: null,
          fecha_fin: null,
          salario_actual: 0,
          salario_otro_si: 0,
          consecutivo_forms: '-',
          concepto: '-',
          codigo_concepto: null,
          unidades: 0,
          fecha_novedad: null,
          dias_a_tomar: 0,
          fecha_inicio_disfrute: null,
          fecha_fin_disfrute: null,
          responsable_validacion: '',
          respuesta_validacion: '',
          ajuste: '',
          fecha_pago: null,
          area_responsable: '',
          categoria_inconsistencia: '',
        };

        for (const [campoBD, colIndex] of Object.entries(headerMap)) {
          const key = campoBD as keyof FilaDB;
          const valor = row.getCell(colIndex)?.value ?? '';

          console.log(`🔍 Fila ${rowIndex} - ${campoBD} (${colIndex}):`, valor);
          this.asignarValorSeguro(fila, key, valor);
        }

        console.log(`✅ Fila ${rowIndex} armada:`, fila);

        filas.push(fila);
      }

      if (filas.length === 0) {
        throw new Error('El archivo no contiene filas válidas para importar.');
      }

      console.log('💾 Total de filas a guardar:', filas.length);

      await this.prisma.detalleNovedadMasiva.createMany({
        data: filas,
        skipDuplicates: true,
      });

      console.log('✅ Datos guardados en la base de datos.');

      for (const fila of filas) {
        console.log('🧪 Fecha lista para guardar:', fila.fecha);
      }

      console.log(`🎉 Se procesaron ${filas.length} filas correctamente`);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido';
      console.error('❌ Error procesando Excel:', error);
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

  private convertirAFecha(valor: unknown): Date | null {
    if (!valor) return null;

    try {
      let fecha: Date;

      if (valor instanceof Date) {
        return new Date(valor.getFullYear(), valor.getMonth(), valor.getDate());
      }

      if (typeof valor === 'string') {
        const partes = valor.split('/');
        if (partes.length === 3) {
          const dia = parseInt(partes[0], 10);
          const mes = parseInt(partes[1], 10) - 1;
          const anio = parseInt(partes[2], 10);
          return new Date(anio, mes, dia);
        }
        fecha = new Date(valor);
        return new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate());
      }

      if (typeof valor === 'number') {
        const temp = new Date((valor - 25569) * 86400 * 1000);
        return new Date(
          temp.getFullYear(),
          temp.getMonth(),
          temp.getDate(),
          5, // 👈 agregamos 5 horas de compensación para Colombia
          0,
          0,
          0,
        );
      }

      return null;
    } catch (error) {
      console.error('❌ Error en convertirAFecha:', error);
      return null;
    }
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

  private mapearCamposPorTipo(data: CrearNovedadIndividual): Partial<FilaDB> {
    const campos: Partial<FilaDB> = {};

    switch (data.titulo) {
      case 'Vacaciones':
        campos.fecha_inicio_disfrute = data.fecha_inicio
          ? new Date(data.fecha_inicio)
          : null;

        campos.fecha_fin_disfrute = data.fecha_fin
          ? new Date(data.fecha_fin)
          : null;

        campos.dias_a_tomar = data.dias ?? 0;
        break;

      case 'Horas Extra':
        campos.concepto = data.concepto ?? '-';
        campos.codigo_concepto = data.codigo ? Number(data.codigo) : 0;
        campos.unidades = data.unidad ? Number(data.unidad) : 0;
        campos.fecha_novedad = data.fecha_novedad
          ? new Date(new Date(data.fecha_novedad).setUTCHours(5, 0, 0, 0))
          : null;
        break;

      case 'Otro Si Temporal':
        campos.jornada_empleado = data.jornada_actual ?? '-';
        campos.jornada_otro_si = data.nueva_jornada ?? '-';
        campos.fecha_inicio = data.fecha_inicio
          ? new Date(data.fecha_inicio)
          : null;
        campos.fecha_fin = data.fecha_fin ? new Date(data.fecha_fin) : null;
        campos.salario_actual = data.salario_actual ?? 0;
        campos.salario_otro_si = data.nuevo_salario ?? 0;
        campos.consecutivo_forms = data.consecutivo ?? '-';
        campos.fecha_novedad = data.fecha_novedad
          ? new Date(new Date(data.fecha_novedad).setUTCHours(5, 0, 0, 0))
          : null;
        break;
    }

    return campos;
  }

  async guardarFormularioIndividual(
    data: CrearNovedadIndividual,
    id_novedad: number,
  ): Promise<void> {
    const camposExtra = this.mapearCamposPorTipo(data);

    const fila: FilaDB = {
      id_novedad,
      n: 1,
      fecha: data.fecha
        ? new Date(new Date(data.fecha).setUTCHours(5, 0, 0, 0))
        : new Date(new Date().setUTCHours(5, 0, 0, 0)),

      // Asignaciones comunes
      cedula: data.cedula,
      nombre: data.nombre,
      categoria: data.titulo ?? '-',
      tienda: data.tienda ?? '-',
      jefe: data.jefe ?? '-',
      detalle: data.detalle,

      // Solo los campos comunes en blanco, que luego se sobreescriben si aplica
      jornada_empleado: '-',
      jornada_otro_si: '-',
      fecha_inicio: null, // solo para contratos
      fecha_fin: null,
      salario_actual: 0,
      salario_otro_si: 0,
      consecutivo_forms: '-',
      concepto: '-',
      codigo_concepto: null,
      unidades: 0,
      fecha_novedad: null,
      dias_a_tomar: 0,
      fecha_inicio_disfrute: null, // solo para vacaciones
      fecha_fin_disfrute: null,
      responsable_validacion: '',
      respuesta_validacion: '',
      ajuste: '',
      fecha_pago: null,
      area_responsable: '',
      categoria_inconsistencia: '',

      ...camposExtra, // ← Aquí se inyectan los campos según el tipo
    };

    console.log('🧾 Fila a guardar:', fila);

    await this.prisma.detalleNovedadMasiva.create({
      data: fila,
    });

    console.log('✅ Novedad individual guardada en la base');
  }

  async generarConsolidadoPostNomina(
    solicitudes: SolicitudConIdDetalle[],
  ): Promise<Buffer> {
    const archivoBase = 'Consolidado_PostNomina_Cierre.xlsx';

    const basePath = __dirname.includes('dist')
      ? path.resolve(__dirname, '..', '..', '..', 'assets', 'templates')
      : path.resolve(__dirname, '..', '..', 'assets', 'templates');

    const plantillaPath = path.join(basePath, archivoBase);

    try {
      await fs.access(plantillaPath);
      const buf = await fs.readFile(plantillaPath);

      const workbook = new Workbook();
      await workbook.xlsx.load(buf);
      const sheet = workbook.getWorksheet(1);

      if (!sheet) {
        throw new Error('No se pudo cargar la hoja de la plantilla.');
      }

      const filaInicio = 7;

      solicitudes.forEach((orig, idx) => {
        const row = sheet.getRow(filaInicio + idx);

        // A y B
        row.getCell('A').value = orig.id_novedad;
        row.getCell('B').value = orig.n;

        // ✅ FECHA REPORTE (Columna C)
        const fechaReporte = this.parseFechaDesdeFront(orig.fecha);
        console.log(
          '🟢 ID:',
          orig.id_novedad,
          'Fecha original:',
          orig.fecha,
          'Fecha parseada:',
          fechaReporte,
        );

        if (fechaReporte) {
          row.getCell('C').value = fechaReporte;
          row.getCell('C').numFmt = 'dd/mm/yyyy';
        }

        // D en adelante
        row.getCell('D').value = orig.cedula;
        row.getCell('E').value = orig.nombre;
        row.getCell('F').value = orig.categoria;
        row.getCell('G').value = orig.tienda;
        row.getCell('H').value = orig.jefe;
        row.getCell('I').value = orig.detalle;

        if (orig.jornada_empleado)
          row.getCell('J').value = orig.jornada_empleado;
        if (orig.jornada_otro_si) row.getCell('K').value = orig.jornada_otro_si;

        if (
          orig.fecha_inicio instanceof Date &&
          !isNaN(orig.fecha_inicio.getTime())
        ) {
          row.getCell('L').value = orig.fecha_inicio;
          row.getCell('L').numFmt = 'dd/mm/yyyy';
        }

        if (
          orig.fecha_fin instanceof Date &&
          !isNaN(orig.fecha_fin.getTime())
        ) {
          row.getCell('M').value = orig.fecha_fin;
          row.getCell('M').numFmt = 'dd/mm/yyyy';
        }

        if (typeof orig.salario_actual === 'number')
          row.getCell('N').value = orig.salario_actual;
        if (typeof orig.salario_otro_si === 'number')
          row.getCell('O').value = orig.salario_otro_si;
        if (orig.consecutivo_forms)
          row.getCell('P').value = orig.consecutivo_forms;
        if (orig.concepto) row.getCell('Q').value = orig.concepto;
        if (orig.codigo_concepto) row.getCell('R').value = orig.codigo_concepto;
        if (typeof orig.unidades === 'number')
          row.getCell('S').value = orig.unidades;

        if (
          orig.fecha_novedad instanceof Date &&
          !isNaN(orig.fecha_novedad.getTime())
        ) {
          row.getCell('T').value = orig.fecha_novedad;
          row.getCell('T').numFmt = 'dd/mm/yyyy';
        }

        if (
          orig.fecha_inicio_disfrute instanceof Date &&
          !isNaN(orig.fecha_inicio_disfrute.getTime())
        ) {
          row.getCell('U').value = orig.fecha_inicio_disfrute;
          row.getCell('U').numFmt = 'dd/mm/yyyy';
        }

        if (
          orig.fecha_fin_disfrute instanceof Date &&
          !isNaN(orig.fecha_fin_disfrute.getTime())
        ) {
          row.getCell('V').value = orig.fecha_fin_disfrute;
          row.getCell('V').numFmt = 'dd/mm/yyyy';
        }

        if (orig.responsable_validacion)
          row.getCell('W').value = orig.responsable_validacion;
        if (orig.respuesta_validacion)
          row.getCell('X').value = orig.respuesta_validacion;
        if (orig.ajuste) row.getCell('Y').value = orig.ajuste;

        if (
          orig.fecha_pago instanceof Date &&
          !isNaN(orig.fecha_pago.getTime())
        ) {
          row.getCell('Z').value = orig.fecha_pago;
          row.getCell('Z').numFmt = 'dd/mm/yyyy';
        }

        if (orig.area_responsable)
          row.getCell('AA').value = orig.area_responsable;
        if (orig.categoria_inconsistencia)
          row.getCell('AB').value = orig.categoria_inconsistencia;

        row.commit();
      });

      const finalBuf = await workbook.xlsx.writeBuffer();
      return Buffer.from(finalBuf);
    } catch (error: unknown) {
      const msg = error instanceof Error ? error.message : 'Error desconocido';
      console.error('Error en generarConsolidadoPostNomina:', msg);
      throw new Error(`No se pudo generar el consolidado: ${msg}`);
    }
  }
  private parseFechaDesdeFront(fecha: string | Date): Date | null {
    if (fecha instanceof Date && !isNaN(fecha.getTime())) {
      return fecha;
    }

    if (typeof fecha === 'string') {
      // 1. Intenta parsear ISO directamente
      const iso = new Date(fecha);
      if (!isNaN(iso.getTime())) return iso;

      // 2. Si falló, intenta con "DD/MM/YYYY" o "DD-MM-YYYY"
      const partes = fecha.split(/[/-]/);
      if (partes.length === 3) {
        const [dia, mes, anio] = partes.map((p) => parseInt(p, 10));
        const fechaFinal = new Date(anio, mes - 1, dia);
        if (!isNaN(fechaFinal.getTime())) return fechaFinal;
      }
    }

    return null; // Si todo falla, null
  }

  async obtenerSolicitudesConsolidado(
    id_novedad: number,
  ): Promise<SolicitudConIdDetalle[]> {
    const solicitudes = await this.prisma.detalleNovedadMasiva.findMany({
      where: { id_novedad },
      orderBy: { n: 'desc' },
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
        codigo_concepto:
          typeof s.codigo_concepto === 'string'
            ? parseInt(s.codigo_concepto) || 0
            : (s.codigo_concepto ?? 0),
        unidades: s.unidades ?? 0,
        responsable_validacion: s.responsable_validacion ?? '',
        respuesta_validacion: s.respuesta_validacion ?? '',
        ajuste: s.ajuste ?? '',
        area_responsable: s.area_responsable ?? '',
        categoria_inconsistencia: s.categoria_inconsistencia ?? '',
        detalle: s.detalle ?? '',
        cedula:
          typeof s.cedula === 'string'
            ? parseInt(s.cedula)
            : s.cedula !== null && s.cedula !== undefined
              ? s.cedula
              : 0,
        nombre: s.nombre ?? '',
        categoria: s.categoria ?? '',
        tienda: s.tienda ?? '',
        jefe: s.jefe ?? '',
        fecha_inicio: s.fecha_inicio,
        fecha_fin: s.fecha_fin,
        fecha_novedad: s.fecha_novedad,
        dias_a_tomar: s.dias_a_tomar ?? 0,
        fecha_inicio_disfrute: s.fecha_inicio_disfrute,
        fecha_fin_disfrute: s.fecha_fin_disfrute,
        fecha_pago: s.fecha_pago,
      };
    });
  }

  async generarDesdeVistaPrevia(filas: FilaParaExportar[]): Promise<Buffer> {
    const plantillaPath = path.join(
      __dirname.includes('dist')
        ? path.resolve(__dirname, '..', '..', '..', 'assets', 'templates')
        : path.resolve(__dirname, '..', '..', 'assets', 'templates'),
      'Consolidado_PostNomina_Cierre.xlsx',
    );

    const buf = await fs.readFile(plantillaPath);
    const workbook = new Workbook();
    await workbook.xlsx.load(buf);
    const sheet = workbook.getWorksheet(1);

    if (!sheet) {
      throw new Error(
        '❌ No se pudo cargar la hoja de cálculo desde la plantilla',
      );
    }

    const filaInicio = 7;

    filas.forEach((fila, idx) => {
      const row = sheet.getRow(filaInicio + idx);
      row.getCell('A').value = fila.id;
      row.getCell('B').value = fila.numero;
      row.getCell('C').value = fila.fecha;
      row.getCell('D').value = fila.cedula;
      row.getCell('E').value = fila.nombre;
      row.getCell('F').value = fila.categoria;
      row.getCell('G').value = fila.tienda;
      row.getCell('H').value = fila.jefe;
      row.getCell('I').value = fila.detalle;
      row.getCell('J').value = fila.jornadaEmAc;
      row.getCell('K').value = fila.jornadaOtrSiTem;
      row.getCell('L').value = fila.fechainicio;
      row.getCell('M').value = fila.fechafin;
      row.getCell('N').value = fila.salarioActual;
      row.getCell('O').value = fila.salarioOtroSiTemp;
      row.getCell('P').value = fila.consForms;
      row.getCell('Q').value = fila.concepto;
      row.getCell('R').value = fila.codigo;
      row.getCell('S').value = fila.unidades;
      row.getCell('T').value = fila.fechaNove;
      row.getCell('U').value = fila.diasATomar;
      row.getCell('V').value = fila.fechInicioDisfrute;
      row.getCell('W').value = fila.fechaFinDisfrute;
      row.getCell('X').value = fila.ResponsableValidacion;
      row.getCell('Y').value = fila.RespuestaValidacion;
      row.getCell('Z').value = fila.ajuste;
      row.getCell('AA').value = fila.Fechapago;
      row.getCell('AB').value = fila.AreaRespon;
      row.getCell('AC').value = fila.CategInconsitencia;

      row.commit();
    });

    const finalBuffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(finalBuffer);
  }

  async procesarArchivoRespuestas(
    fileBuffer: Buffer,
  ): Promise<{ actualizados: number }> {
    const workbook = new Workbook();
    await workbook.xlsx.load(fileBuffer);
    const sheet = workbook.getWorksheet(1);

    if (!sheet) {
      throw new Error('❌ No se pudo leer la hoja del Excel');
    }

    let actualizados = 0;
    const idsActualizados = new Set<number>();

    for (let rowIndex = 7; rowIndex <= sheet.rowCount; rowIndex++) {
      const row = sheet.getRow(rowIndex);
      const idNovedad = row.getCell('A').value as number;
      const n = row.getCell('B').value as number;

      if (
        !idNovedad ||
        !n ||
        typeof idNovedad !== 'number' ||
        typeof n !== 'number'
      )
        continue;

      const detalle = await this.prisma.detalleNovedadMasiva.findFirst({
        where: {
          id_novedad: idNovedad,
          n: n,
          novedad: {
            id_estado_novedad: 2, // solo procesamos EN GESTIÓN
          },
        },
        include: {
          novedad: true,
        },
      });

      if (!detalle) continue;

      // Obtener celdas
      const responValidacion = this.getCellValue(row, 'X');
      const respuestaValidacion = this.getCellValue(row, 'Y');
      const ajuste = this.getCellValue(row, 'Z');
      const fechaPagoRaw = row.getCell('AA').value;
      const areaResponsable = this.getCellValue(row, 'AB');
      const categoriaInconsistencia = this.getCellValue(row, 'AC');

      const fecha_pago =
        fechaPagoRaw instanceof Date
          ? fechaPagoRaw
          : typeof fechaPagoRaw === 'string' && fechaPagoRaw.trim()
            ? new Date(fechaPagoRaw)
            : undefined;

      // Actualizar detalle
      await this.prisma.detalleNovedadMasiva.update({
        where: { id_detalle: detalle.id_detalle },
        data: {
          responsable_validacion: responValidacion,
          respuesta_validacion: respuestaValidacion,
          ajuste,
          fecha_pago,
          area_responsable: areaResponsable,
          categoria_inconsistencia: categoriaInconsistencia,
        },
      });

      actualizados++;

      // Marcar novedad para futura actualización de estado
      idsActualizados.add(idNovedad);
    }

    // Actualizar estado de todas las novedades cuyos detalles fueron tocados
    for (const id of idsActualizados) {
      const detalles = await this.prisma.detalleNovedadMasiva.findMany({
        where: { id_novedad: id },
      });

      const todosActualizados = detalles.every(
        (d) =>
          d.respuesta_validacion !== null &&
          d.respuesta_validacion !== undefined,
      );

      if (todosActualizados) {
        await this.prisma.novedad.update({
          where: { id_novedad: id },
          data: { id_estado_novedad: 3 }, // GESTIONADA
        });
      }
    }

    return { actualizados };
  }
}
