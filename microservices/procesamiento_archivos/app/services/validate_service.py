from fastapi import UploadFile, Form
import openpyxl
from io import BytesIO
from datetime import datetime

TIPOS_PERMITIDOS = {
    "Auxilio de transporte": "SOLICITUDES.xlsx",
    "Otros": "SOLICITUDES.xlsx",
    "Otro Si Definitivo": "SOLICITUDES.xlsx",
    "Horas Extra": "SOLICITUDES2.xlsx",
    "Otro Si Temporal": "SOLICITUDES3.xlsx",
    "Vacaciones": "SOLICITUDES4.xlsx",
}

async def validar_excel(
    file: UploadFile,
    tipo: str,
    titulo: str = Form(...),
    nombreUsuario: str = Form(...),
    nombreTienda: str = Form(...)
):
    
    print(f"📥 Archivo recibido: {file.filename}")
    print(f"📋 Tipo: {tipo}, Título: {titulo}, Usuario: {nombreUsuario}, Tienda: {nombreTienda}")
    
    
    errores = []
    cantidad_solicitudes = 0  # Contador de filas válidas

    if tipo not in TIPOS_PERMITIDOS:
        return {
            "valido": False,
            "errores": [f"❌ Tipo de solicitud '{tipo}' no es válido."]
        }

    content = await file.read()
    wb = openpyxl.load_workbook(filename=BytesIO(content), data_only=True)
    sheet = wb.active

    encabezados = [cell.value for cell in sheet[5]]
    encabezados_normalizados = [str(h).strip().upper() if h else "" for h in encabezados]
    print("📌 Encabezados detectados:", encabezados_normalizados)

    # Diccionario de cabeceras esperadas por tipo
    cabeceras_por_tipo = {
        "SOLICITUDES.xlsx": [
            "N", "FECHA DE REPORTE", "CEDULA", "NOMBRE (APELLIDOS-NOMBRES)",
            "CATEGORIA", "TIENDA", "QUIEN REPORTA LA NOVEDAD\n(Nombre Jefe GH)", "DETALLE NOVEDAD"
        ],
        "SOLICITUDES2.xlsx": [
            "N", "FECHA DE REPORTE", "CEDULA", "NOMBRE (APELLIDOS-NOMBRES)",
            "CATEGORIA", "TIENDA", "QUIEN REPORTA LA NOVEDAD\n(Nombre Jefe GH)", "DETALLE NOVEDAD",
            "CONCEPTO", "CON_CODIGO", "UNIDADES", "FECHA NOVEDAD"
        ],
        "SOLICITUDES3.xlsx": [
            "N", "FECHA DE REPORTE", "CEDULA", "NOMBRE (APELLIDOS-NOMBRES)",
            "CATEGORIA", "TIENDA", "QUIEN REPORTA LA NOVEDAD\n(Nombre Jefe GH)", "DETALLE NOVEDAD",
            "JORNADA EMPLEADO", "JORNADA OTRO SI TEMPORAL", "FECHA INICIO", "FECHA FIN",
            "SALARIO ACTUAL", "SALARIO OTRO SI TEMPORAL", "CONSECUTIVO FORMS"
        ],
        "SOLICITUDES4.xlsx": [
            "N", "FECHA DE REPORTE", "CEDULA", "NOMBRE (APELLIDOS-NOMBRES)",
            "CATEGORIA", "TIENDA", "QUIEN REPORTA LA NOVEDAD\n(Nombre Jefe GH)", "DETALLE NOVEDAD",
            "DIAS A TOMAR", "FECHA INICIO", "FECHA FIN"
        ]
    }
    
    CAMPOS_OBLIGATORIOS_POR_PLANTILLA = {
        "SOLICITUDES.xlsx": [
            "CEDULA", "NOMBRE (APELLIDOS-NOMBRES)", "DETALLE NOVEDAD"
        ],
        "SOLICITUDES2.xlsx": [
            "CEDULA", "NOMBRE (APELLIDOS-NOMBRES)", "DETALLE NOVEDAD",
            "CONCEPTO", "CON_CODIGO", "UNIDADES", "FECHA NOVEDAD"
        ],
        "SOLICITUDES3.xlsx": [
            "CEDULA", "NOMBRE (APELLIDOS-NOMBRES)", "DETALLE NOVEDAD",
            "JORNADA EMPLEADO", "JORNADA OTRO SI TEMPORAL", "FECHA INICIO", "FECHA FIN",
            "SALARIO ACTUAL", "SALARIO OTRO SI TEMPORAL", "CONSECUTIVO FORMS"
        ],
        "SOLICITUDES4.xlsx": [
            "CEDULA", "NOMBRE (APELLIDOS-NOMBRES)", "DETALLE NOVEDAD",
            "DIAS A TOMAR", "FECHA INICIO", "FECHA FIN"
        ]
    }

    plantilla_esperada = TIPOS_PERMITIDOS[tipo]
    cabeceras_esperadas = [c.strip().upper() for c in cabeceras_por_tipo[plantilla_esperada]]
    
    #SOLO COLUMNAS NECESARIAS
    encabezados_truncados = encabezados_normalizados[:len(cabeceras_esperadas)]

    # Comparar con los headers reales del archivo
    if encabezados_truncados != cabeceras_esperadas:
        errores.append("❌ Las cabeceras no coinciden con el formato esperado.")
        errores.append(f"🔎 Esperado: {cabeceras_esperadas}")
        errores.append(f"📄 Recibido: {encabezados_truncados}")

    if errores:
        print("🛑 Errores de encabezado:", errores)
        return {
            "valido": False,
            "errores": errores
        }

    # Construir los campos obligatorios para verificación de contenido 
    campos_obligatorios = {}
    
    campos_esperados = CAMPOS_OBLIGATORIOS_POR_PLANTILLA[plantilla_esperada]
    
    for campo in campos_esperados:
        if campo in encabezados_normalizados:
            campos_obligatorios[campo] = encabezados_normalizados.index(campo)
        else:
            errores.append(f"❌ Falta la columna obligatoria: {campo}")

        if errores:
            print("🛑 Errores por campos obligatorios:", errores)
            return {
                "valido": False,
                "errores": errores
            }

    # Recorrer las filas
    for row_idx in range(6, sheet.max_row + 1):
        fila = sheet[row_idx]
        fila_visible = any(cell.value is not None for cell in fila)

        if not fila_visible:
            print(f"⚪ Fila {row_idx} vacía. Saltando...")
            continue

        print(f"\n🔍 Validando fila {row_idx}...")
        fila_valida = True

        for campo, col_idx in campos_obligatorios.items():
            cell = fila[col_idx]
            valor = cell.value

            if valor is None or str(valor).strip() == "":
                mensaje_error = f"❌ Fila {row_idx}, Columna {col_idx + 1} ({campo}): VACÍA"
                print(mensaje_error)
                errores.append(mensaje_error)
                fila_valida = False
            else:
                print(f"✅ Fila {row_idx}, Columna {col_idx + 1} ({campo}): OK → '{valor}'")

        # Validaciones automáticas por columnas generadas (solo si hay fila visible)
        cell_A = fila[0]  # Columna A
        cell_B = fila[1]  # Columna B
        cell_E = fila[4]  # Columna E
        cell_F = fila[5]  # Columna F
        cell_G = fila[6]  # Columna G

        # A: Número secuencial
        numero_esperado = row_idx - 5
        if cell_A.value != numero_esperado:
            errores.append(f"❌ Fila {row_idx}, columna A: Se esperaba el número '{numero_esperado}' y llegó '{cell_A.value}'")

        # B: Fecha del día
        fecha_b = cell_B.value
        if isinstance(fecha_b, datetime):
            fecha_b = fecha_b.date()
        hoy = datetime.now().date()
        if fecha_b != hoy:
            errores.append(f"❌ Fila {row_idx}, columna B: Se esperaba la fecha '{hoy.strftime('%d/%m/%Y')}' y llegó '{cell_B.value}'")

        # E: Título
        if str(cell_E.value).strip() != titulo.strip():
            errores.append(f"❌ Fila {row_idx}, columna E: Se esperaba el título '{titulo}' y llegó '{cell_E.value}'")

        # F: Tienda
        if str(cell_F.value).strip() != nombreTienda.strip():
            errores.append(f"❌ Fila {row_idx}, columna F: Se esperaba la tienda '{nombreTienda}' y llegó '{cell_F.value}'")

        # G: Jefe
        if str(cell_G.value).strip() != nombreUsuario.strip():
            errores.append(f"❌ Fila {row_idx}, columna G: Se esperaba el nombre del jefe '{nombreUsuario}' y llegó '{cell_G.value}'")

        if fila_valida:
            print(f"✅ Fila {row_idx} completa y válida.")
            cantidad_solicitudes += 1
        else:
            print(f"⚠️ Fila {row_idx} tiene errores.")

    if errores:
        print("\n🛑 Validación terminada con errores.")
        return {
            "valido": False,
            "errores": errores,
            "tipoValidado": tipo,
            "cantiddadSolicitudes": cantidad_solicitudes
        }

    print(f"\n✅ Validación exitosa. Total solicitudes válidas: {cantidad_solicitudes}")
    return {
        "valido": True,
        "esMasiva": True,
        "cantidadSolicitudes": cantidad_solicitudes,
        "tipoValidado": tipo
    }
