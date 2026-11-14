# Контекст KIRO Platform v2.0

## Платформа v1
Образовательная платформа IT-лагеря: индивидуальные программы (продуктовая, системная, бизнес-аналитика, backend, ИБ, ML), мини-курсы (Python, математика, алгоритмы), математика лагеря, домашки с проверкой в админке, SQL-тренажёр, соцсеть (стена, сообщения, знакомства, уведомления), вакансии.

- Стек: React + Vite (`src/`); Express + better-sqlite3 (`backend/`); админка на чистом JS (`backend/admin/`); миграции в `backend/src/db.js` по `PRAGMA user_version`.
- Контент в коде: `src/data/programs/*.js`, `*-quiz.js`, `src/data/courses.js`, `src/data/math/`.
- Деплой: фронтенд — GitHub Actions по push; бэкенд — SSH + `pm2 reload`.

### Проблемы, которые решает v2.0
- монолит и SQLite;
- контент зашит в код;
- лагерь зашит в код (`is_autumn_camp_2026`, период «1–31 октября», даты созвонов в `autumnCalls.js`);
- нет окружений staging/prod;
- секреты и доступы не разделены.

## Решения по v2.0
- Микросервисы по бизнес-областям, переход по схеме **strangler fig**: старый бэкенд работает, пока сервисы переносятся по одному.
- Сервисы: Gateway, Auth, Users/Cohorts, Content, Learning, Code Runner, Community (соцсеть), Careers, Notifications, Analytics, AI.
- Инфраструктура: Traefik/Kong (Gateway); PostgreSQL — своя БД у каждого сервиса; Redis; RabbitMQ или NATS; S3 reg.ru; Docker Compose → Kubernetes позже; GitHub Actions; OpenTelemetry + Prometheus + Grafana + Loki.
- Монорепозиторий `kiro-v2`: `services/`, `frontend/`, `admin/`, `contracts/`, `infra/`, `docs/`. CI собирает только изменённые сервисы. CODEOWNERS по командам.
- Серверы reg.ru: staging (1 VPS); prod-приложение (все сервисы в контейнерах); prod-данные (PostgreSQL, Redis, брокер — или управляемая БД); Code Runner изолированно.
- Правила: сервис не читает чужую БД; сначала контракт (OpenAPI), потом код; у каждого сервиса есть команда-владелец.

## Доменная модель: потоки лагеря
Поток каждые 3 месяца; материалы и потоки хранятся отдельно.

```
Program → ProgramVersion → главы
Cohort (дата старта, версии программ, расписание, кураторы)
   └─ Enrollment (студент + направление)
        ├─ прогресс
        └─ домашки
```

- Даты считаются от старта потока.
- Прогресс и домашки привязаны к Enrollment.
- Старые потоки архивируются.
- При переносе текущий лагерь становится потоком «Осень 2026», его главы — версией v1.

## Команды
| Команда | Зона |
|---|---|
| Platform | Gateway, Auth, CI/CD, мониторинг, шаблон сервиса |
| Learning | Content, Learning, Cohorts, админка контента и проверки |
| Growth | Community, Careers, Notifications |
| Data & AI | Analytics, AI, Code Runner |
| Security | сквозная, со всеми командами |

Люди: продуктовые, системные и бизнес-аналитики; фуллстаки/бэкендеры (рисуют UI); ML-разработчики; специалисты ИБ.

## Документы v1 (в старом репозитории)
- `docs/PLATFORM_AUDIT_V1_TO_V2.md` — аудит платформы
- `docs/ML_AI_OPPORTUNITIES.md` — идеи ML/AI
- `docs/kiro-system-design.html` — системный дизайн
- `docs/kiro-design-system.md` — дизайн-система
- `backend/src/db.js` — схема и миграции
- `src/data/programs/index.js` — структура программ и глав
