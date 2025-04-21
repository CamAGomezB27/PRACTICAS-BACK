from app.utils.token_manager import obtener_token
import requests
import os

def enviar_correo():
    token = obtener_token()
    # construir cuerpo del mensaje
    return {"mensaje": "Correo enviado (simulado)", "token": token[:20] + "..."}
