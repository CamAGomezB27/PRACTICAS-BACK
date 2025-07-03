from fastapi import UploadFile, Form
import openpyxl
from io import BytesIO
from datetime import datetime
import requests
import openpyxl.utils

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
    
    def validar_duplicado_en_backend(cedula, fecha, tipo, detalle):
        url = "http://localhost:3000/novedad/validar-duplicado"
        params = {
            "cedula": cedula,
            "fecha": fecha,
            "tipo": tipo,
            "detalle": detalle
        }
        try :
            response = requests.get(url, params=params, timeout=5)
            if response.status_code == 200:
                data = response.json()
                return data.get("existe", False), data.get("mensaje", "")
            else:
                return False, f"⚠️ Error al consultar duplicado: código {response.status_code}"
        except Exception as e:
            return False, f"⚠️ Excepción al validar duplicado: {e}"
    
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
        
    #VALIDACIONES EXTRA
    
    #1.Datos fuera del rango
    max_col_permitida = len(cabeceras_esperadas)
    
    for row_idx in range(6, sheet.max_row +1):
        fila = sheet[row_idx]
        for col_idx in range(max_col_permitida, sheet.max_column): #Columnas fuera de rango
            if col_idx >= len(fila):
                continue
            valor_extra = fila[col_idx].value
            if valor_extra is not None and str(valor_extra).strip() != "":
                letra_col = openpyxl.utils.get_column_letter(col_idx + 1)
                errores.append(
                     f"❌ Fila {row_idx}, columna {letra_col}: No debe contener información. Solo se permiten columnas hasta la {openpyxl.utils.get_column_letter(max_col_permitida)}."
                )

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

    #SET CONTROL DE DUPLICADOS EN LA MISMA PLANTILLA
    duplicados_cedula_fecha = set()

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
            
                #VALIDACIONES EXTRA
                
                #3.LONGITUD DE MENSAJE EN DETALLE NOVEDAD
                if campo == "DETALLE NOVEDAD":
                    texto = str(valor).strip()
                    longitud = len (texto)
                    if longitud < 15 or longitud > 125:
                        errores.append(
                            f"❌ Fila {row_idx}, Columna {col_idx + 1} (DETALLE NOVEDAD): debe tener entre 15 y 125 caracteres. Tiene {longitud}."
                        )
                        fila_valida = False
                
                #4. SIN CARACTERES RAROS (# $ @ . ! ¡ ¿ ? .) EN NOMBRE
                if campo == "NOMBRE (APELLIDOS-NOMBRES)":
                    texto = str(valor).strip()
                    if not all(char.isalpha() or char.isspace() or char in "áéíóúÁÉÍÓÚñÑ" for char in texto):
                        errores.append(
                            f"❌ Fila {row_idx}, Columna {col_idx + 1} (NOMBRE): contiene caracteres inválidos. Solo se permiten letras, tildes y espacios."
                        )
                        fila_valida = False
                
                #5. CAMPO CEDULA SOLO NUMEROS
                if campo == "CEDULA":
                    texto = str(valor).strip()
                    if not texto.isdigit():
                        errores.append(
                            f"❌ Fila {row_idx}, Columna {col_idx + 1} (CÉDULA): debe contener solo números. Valor recibido: '{texto}'."
                        )
                        fila_valida = False

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
        
        #VALIDACIONES EXTRA
        
        #2.No puede estar la misma persona el mismo día en la misma solicitud
        cedula_idx = campos_obligatorios.get("CEDULA")
        fecha_idx = 1 # COLUMNA B --> FECHA
        
        cedula_val = str(fila[cedula_idx].value).strip() if cedula_idx is not None else ""
        fecha_val = fila[fecha_idx].value
        
        if isinstance(fecha_val, datetime):
            fecha_val = fecha_val.date()
        elif isinstance(fecha_val, str):
            try:
                fecha_val = datetime.strptime(fecha_val, "%d/%m/%Y").date()
            except Exception:
                fecha_val = None
        
        clave = f"{cedula_val}-{fecha_val}"
        
        if clave in duplicados_cedula_fecha:
            errores.append(
                f"❌ Fila {row_idx}: La persona con cédula {cedula_val} ya tiene una solicitud registrada el día {fecha_val}."
            )
            fila_valida = False
        else: duplicados_cedula_fecha.add(clave)
        
        #VALIDAR DUPLICADOS EN BD DESDE EN BACKEND
        detalle_idx = campos_obligatorios.get("DETALLE NOVEDAD")
        detalle_val = str(fila[detalle_idx].value).strip() if detalle_idx is not None else ""
        
        print(f"🔄 Verificando duplicado en BD: {cedula_val} | {fecha_val} | {tipo} | {detalle_val}")

        
        existe_en_bd, mensaje_duplicado = validar_duplicado_en_backend(
            cedula_val, fecha_val.strftime("%Y-%m-%d") if isinstance(fecha_val, datetime) else str(fecha_val), tipo, detalle_val
        )
        
        if existe_en_bd:
            errores.append(f"❌ Fila {row_idx}: novedad duplicada en base de datos – {mensaje_duplicado}")
            fila_valida = False  
            
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
