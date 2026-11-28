from sqlalchemy import create_engine, text

from kiro.config import get_settings

settings = get_settings()
engine = create_engine(
    settings.database_url
)  # Синхронное ядро для шаблона, в будущем нужно решить какое взять


def check_db() -> None:
    with engine.connect() as connection:
        connection.execute(text("SELECT 1"))
