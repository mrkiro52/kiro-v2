from fastapi import FastAPI, HTTPException
from sqlalchemy.exc import SQLAlchemyError

from kiro.db import check_db
from kiro.modules.example.router import router
from kiro.telemetry import configure_tracing

app = FastAPI()
app.include_router(router)
configure_tracing(app)


@app.get("/ready")
def ready() -> dict[str, str]:
    try:
        check_db()
    except SQLAlchemyError:
        raise HTTPException(status_code=503, detail="Database unavailable")

    return {"status": "ready"}
