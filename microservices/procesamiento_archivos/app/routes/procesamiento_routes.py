from fastapi import APIRouter, UploadFile, File
from app.services.procesamiento_service import procesar_archivo

router = APIRouter()

@router.post("/archivo")
async def subir_archivo(file: UploadFile = File(...)):
    return procesar_archivo(file)
