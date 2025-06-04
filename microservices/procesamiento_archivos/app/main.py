from fastapi import FastAPI
from app.routes.procesamiento_routes import router as procesamiento_router

app = FastAPI()
app.include_router(procesamiento_router, prefix="/procesar", tags=["Procesamiento"])
