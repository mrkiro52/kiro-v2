# KIRO Platform v2.0 — документация

| Файл | Что внутри |
|---|---|
| [01-context.md](01-context.md) | Контекст: что не так в v1, решения по v2.0, сервисы, инфраструктура, домен «потоки» |
| [02-roadmap.md](02-roadmap.md) | Этапы 0–6, команды, состав первого этапа |
| [03-project-setup.md](03-project-setup.md) | GitHub Projects (поля, шаблоны, milestones) и чек-лист «перед стартом» |
| [04-sprint-1-backlog.md](04-sprint-1-backlog.md) | Бэклог первого спринта: Auth, регистрация, соцсеть (BA/DEV/SEC/ML) |
| [tasks/](tasks/README.md) | Подробное ТЗ на каждую задачу спринта 1 (то же, что в issues) |
| [design/kiro-design-system.md](design/kiro-design-system.md) | **Дизайн-система**: цвета, шрифты, токены, компоненты. Брать стили отсюда |
| [security/ssdlc.md](security/ssdlc.md) | **SSDLC**: безопасный цикл разработки, сканеры, политика выпуска, сроки исправления уязвимостей (SEC-0) |
| [05-ml-ai-backlog.md](05-ml-ai-backlog.md) | ML/AI: задача ML-0 и варианты идей |
| [06-open-questions.md](06-open-questions.md) | Открытые вопросы и решения, которые нужно зафиксировать в ADR |

Правила: решения фиксируются в ADR (`docs/adr/`), сначала контракт (OpenAPI), потом код, сервис не читает чужую БД.
