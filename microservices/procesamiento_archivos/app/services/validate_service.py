from fastapi import UploadFile
import openpyxl
from io import BytesIO

async def validar_excel(file: UploadFile):
    errores = []

    content = await file.read()
    wb = openpyxl.load_workbook(filename=BytesIO(content), data_only=True)
    sheet = wb.active

    encabezados = [cell.value for cell in sheet[5]]
    encabezados_normalizados = [str(h).strip().upper() if h else "" for h in encabezados]
    print("Encabezados detectados:", encabezados_normalizados)

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
                campos_obligatorios[campo] = encabezados_normalizados.index(nombre)
                found = True
                break
        if not found:
            errores.append(f"Falta la columna obligatoria: {campo}")

    if errores:
        print("❌ Errores de encabezado:", errores)
        return errores

    for row_idx in range(6, sheet.max_row + 1):
        fila = sheet[row_idx]
        fila_visible = any(cell.value is not None for cell in fila)

        if not fila_visible:
            continue

        print(f"Validando fila {row_idx}...")

        for campo, col_idx in campos_obligatorios.items():
            cell = fila[col_idx]
            if cell.value is None or str(cell.value).strip() == "":
                errores.append(f"Fila {row_idx}: El campo obligatorio '{campo}' está vacío.")

    return errores
