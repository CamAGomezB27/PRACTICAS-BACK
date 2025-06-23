from fastapi import FastAPI
from app.routes import validate

app = FastAPI(
    title="Microservicio de Validación de Archivos",
    description="Verifica que los archivos Excel cumplan con los requisitos de Nómina.",
    version="1.0.0"
)

#Rutas
app.include_router(validate.router)