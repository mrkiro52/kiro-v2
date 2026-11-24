FROM python:3.12-slim
COPY --from=ghcr.io/astral-sh/uv:0.13.9 /uv /bin/uv

WORKDIR /app

COPY pyproject.toml uv.lock ./
RUN uv sync --locked --no-dev --no-install-project

COPY README.md ./
COPY alembic.ini ./
COPY migrations/ ./migrations/
COPY src/ ./src/
RUN uv sync --locked --no-dev

CMD ["/app/.venv/bin/uvicorn", "kiro.main:app", "--host", "0.0.0.0", "--port", "8000"]
