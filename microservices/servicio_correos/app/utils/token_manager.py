import os
from msal import ConfidentialClientApplication
from dotenv import load_dotenv

load_dotenv()

def obtener_token():
    app = ConfidentialClientApplication(
        os.getenv("CLIENT_ID"),
        authority=f"https://login.microsoftonline.com/{os.getenv('TENANT_ID')}",
        client_credential=os.getenv("CLIENT_SECRET")
    )

    result = app.acquire_token_for_client(scopes=["https://graph.microsoft.com/.default"])
    return result["access_token"]
