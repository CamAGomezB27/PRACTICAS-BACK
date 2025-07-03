from fastapi import APIRouter, UploadFile, File, HTTPException, Form, Depends
from app.services.validate_service import validar_excel
from app.services.auth import verificar_jwt
from fastapi import Header


router = APIRouter(
    prefix="/validar",
    tags=["Validación de Archivos"]
)

@router.post("/")
async def validar_archivo(
    file: UploadFile = File(...),
    tipo: str = Form(...),
    titulo: str = Form(...),
    nombreUsuario: str = Form(...),
    nombreTienda: str = Form(...),
    authorization: str = Header(None)
):
    # Validar extensión
    if not file.filename.endswith(".xlsx"):
        raise HTTPException(status_code=400, detail="Solo se permiten archivos .xlsx")
    
    # Llamar a la función con todos los parámetros
    resultado = await validar_excel(file, tipo, titulo, nombreUsuario, nombreTienda, authorization)

    # Si hay errores (es una lista), retornamos inválido
    if isinstance(resultado, list):
        return {"valido": False, "errores": resultado}

    # Si es válido (es un dict), lo retornamos completo (ya contiene todo)
    return resultado
