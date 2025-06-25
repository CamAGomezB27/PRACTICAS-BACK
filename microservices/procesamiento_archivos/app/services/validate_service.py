from fastapi import UploadFile
import openpyxl
from io import BytesIO

TIPOS_PERMITIDOS = {
    "Auxilio de transporte": "SOLICITUDES.xlsx",
    "Otros": "SOLICITUDES.xlsx",
    "Otro Si Definitivo": "SOLICITUDES.xlsx",
    "Horas Extra": "SOLICITUDES2.xlsx",
    "Otro Si Temporal": "SOLICITUDES3.xlsx",
    "Vacaciones": "SOLICITUDES4.xlsx",
}

async def validar_excel(file: UploadFile, tipo: str):
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

    alias_columnas = {
        "CEDULA": ["CEDULA"],
        "NOMBRE (APELLIDOS-NOMBRES)": ["NOMBRE (APELLIDOS-NOMBRES)"],
        "DETALLE NOVEDAD": ["DETALLE NOVEDAD"]
    }

    campos_obligatorios = {}

    for campo, posibles_nombres in alias_columnas.items():
        found = False
        for nombre in posibles_nombres:
            if nombre in encabezados_normalizados:
                col_idx = encabezados_normalizados.index(nombre)
                campos_obligatorios[campo] = col_idx
                found = True
                print(f"✅ Columna obligatoria '{campo}' encontrada en la posición {col_idx + 1}")
                break
        if not found:
            errores.append(f"❌ Falta la columna obligatoria: {campo}")

    if errores:
        print("🛑 Errores de encabezado:", errores)
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
            "tipoValidado": tipo, #Tipo que se envio 
            "cantiddadSolicitudes": cantidad_solicitudes
        }

    print(f"\n✅ Validación exitosa. Total solicitudes válidas: {cantidad_solicitudes}")
    return {
        "valido": True,
        "esMasiva": True,
        "cantidadSolicitudes": cantidad_solicitudes,
        "tipoValidado": tipo, #Confirmación
    }
