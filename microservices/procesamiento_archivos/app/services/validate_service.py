from fastapi import UploadFile
import openpyxl
from io import BytesIO

async def validar_excel(file: UploadFile):
    errores = []
    
    content = await file.read()
    wb = openpyxl.load_workbook(filename=BytesIO(content))
    sheet = wb.active
    
    #EJEMPLO DE VALIDACIÓN
    columnas_esperadas = ["Cedula", "Nombres", "Fecha Novedad"]
    primera_fila = [cell.value for cell in sheet[1]]
    
    for col in columnas_esperadas:  
        if col not in primera_fila:
            errores.append(f"Falta la columna Obligatoria: {col}")
    
    return errores