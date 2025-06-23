from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.validate_service import validar_excel

router = APIRouter(
    prefix="/validar",
    tags=["Validación de Archivos"]
)

@router.post("/")
async def validar_archivo(file: UploadFile = File(...)):
    if not file.filename.endswith(".xlsx"):
        raise HTTPException(status_code=400, detail="Solo se permiten archivos .xlsx")
    
    errores = await validar_excel(file)
    
    if errores:
        return{"valido": False, "errores": errores}
    return{"valido": True, "mensaje": "Archivo valido"} 