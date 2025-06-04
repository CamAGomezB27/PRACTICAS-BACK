from fastapi import APIRouter
from app.services.correo_service import enviar_correo

router = APIRouter()

@router.post("/enviar")
def enviar():
    return enviar_correo()
