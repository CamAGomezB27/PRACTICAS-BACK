from fastapi import FastAPI
from app.routes.correo_routes import router as correo_router

app = FastAPI()
app.include_router(correo_router, prefix="/correo", tags=["Correo"])
