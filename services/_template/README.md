# Шаблон FastAPI-сервиса

В шаблоне есть пример модуля, PostgreSQL, миграция Alembic, тест `/health` и трассировка OpenTelemetry.

## Запуск

Нужен Docker с Compose. Для локальных проверок установи `uv`.

При первом запуске выполни из корня репозитория:

```sh
cd services/_template
cp .env.example .env
docker compose up --build -d
docker compose exec app /app/.venv/bin/alembic upgrade head
```

- [`/health`](http://127.0.0.1:8001/health) проверяет, что FastAPI отвечает.
- [`/ready`](http://127.0.0.1:8001/ready) выполняет `SELECT 1` и возвращает `503`, если приложение не может подключиться к PostgreSQL.
- [Swagger UI](http://127.0.0.1:8001/docs) показывает доступные эндпоинты.

`DATABASE_URL` берётся из `.env`. Имя `db` в строке подключения — имя контейнерного сервиса PostgreSQL в Compose. Миграции применяются отдельной командой.

## Проверки

Из папки шаблона:

```sh
uv run --locked pytest -q
uv run --locked ruff check .
uv run --locked ruff format --check .
uv run --locked mypy
```

Тест `/health` вызывает приложение напрямую и задаёт тестовый `DATABASE_URL` сам. Для него достаточно uv и Python.

## Миграции и трассировка

Чтобы создать миграцию, выполни `uv run --locked alembic revision -m "описание изменения"` и заполни `upgrade()` и `downgrade()` в новом файле в `migrations/versions/`. Перед применением миграций пересобери образ, чтобы в контейнере появились новые файлы. Текущую ревизию можно посмотреть командой `docker compose exec app /app/.venv/bin/alembic current`.

После запроса к `/health` выполни `docker compose logs --tail=120 app`. В выводе появится span `GET /health` с `trace_id` и именем сервиса `kiro-template`.

## Как начать новый сервис

1. Скопируй файлы шаблона из Git в новую папку в `services/`.
2. В `compose.yml` задай уникальное имя проекта в `name` и свободный порт на хосте. Если переименуешь БД или поменяешь пользователя либо пароль, синхронизируй настройки `db` с `DATABASE_URL` в `.env.example`.
3. В `app.environment` в `compose.yml` задай `OTEL_SERVICE_NAME` для нового сервиса. Команду Uvicorn можно оставить как есть, если Python-пакет по-прежнему называется `kiro`.
4. Используй `src/kiro/modules/example/` как пример для своего модуля и подключи его роутер в `src/kiro/main.py`.
5. Повтори команды из раздела «Запуск» из папки нового сервиса, начиная с копирования `.env.example`. Используй выбранный порт для проверки `/health` и `/ready`.
