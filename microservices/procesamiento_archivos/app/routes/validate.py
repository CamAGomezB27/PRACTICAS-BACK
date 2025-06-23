from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.validate_service import validar_excel

router = APIRouter(
    prefix="/validar",
    tags=["Validación de Archivos"]
)

@router.post("/")
async def validar_archivo(file: UploadFile = File(...)):
    # 🛡️ Validar extensión
    if not file.filename.endswith(".xlsx"):
        raise HTTPException(status_code=400, detail="Solo se permiten archivos .xlsx")
    
    # 🔍 Llama a la función de validación
    resultado = await validar_excel(file)

    # 🔥 Si hay errores (es una lista), retornamos inválido
    if isinstance(resultado, list):
        return {"valido": False, "errores": resultado}

    # ✅ Si es válido (es un dict), lo retornamos completo (ya contiene todo)
    return resultado
