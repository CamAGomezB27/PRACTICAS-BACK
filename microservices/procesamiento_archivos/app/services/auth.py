#auth.py
from fastapi import Depends, HTTPException
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from jose import JWTError, jwt
from dotenv import load_dotenv
load_dotenv()
import os

SECRET_KEY = os.getenv("JWT_SECRET")  # reemplaza por la real si quieres
ALGORITHM = "HS256"

# Middleware de seguridad
security = HTTPBearer()

def verificar_jwt(
    credentials: HTTPAuthorizationCredentials = Depends(security),
):
    token = credentials.credentials
    secret_key = os.getenv("JWT_SECRET")  # <- Cargamos en tiempo real

    try:
        print("🔑 Clave usada para verificar JWT:", secret_key)
        payload = jwt.decode(token, secret_key, algorithms=[ALGORITHM])
        return payload
    except JWTError:
        raise HTTPException(status_code=401, detail="Token inválido o expirado")
