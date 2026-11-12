# Настройка задач и окружения

## GitHub Projects (уровень организации)
Поля:
| Поле | Значения |
|---|---|
| Status | Todo, In progress, Review, Test, Done |
| Team | Platform, Learning, Growth, Data & AI, Security |
| Iteration | 2 недели |
| Priority | P0, P1, P2 |
| Estimate | story points / дни |
| Role | BA, Backend, Security, ML |
| Service | Gateway, Auth, Users, Content, Learning, Code Runner, Community, Careers, Notifications, Analytics, AI, Infra, Docs |

Правила:
- Шаблоны задач — `.github/ISSUE_TEMPLATE/` (в репозитории `kiro-v2`).
- Эпики — через sub-issues.
- Этапы — через Milestones.
- Черновики (draft) — только для идей; в работу берутся только issues.

## Префиксы задач
`BA-n` бизнес-аналитика · `DEV-n` бэкенд и фронтенд · `QA-n` тестирование (бэкенд) · `SEC-n` ИБ · `ML-n` ML/AI.

Поле **Role** в проекте: BA, Backend, Security, ML. Метка `start-now` — задачи, которые можно брать сразу.

## Чек-лист «перед стартом» (этап 0)
- [ ] GitHub-организация
- [ ] Защита `main` (PR, ревью, обязательные проверки CI)
- [ ] Environments `staging` и `production` с отдельными секретами
- [ ] Серверы reg.ru: SSH только по ключам, файрвол, бэкапы
  - [ ] staging (1 VPS)
  - [ ] prod-приложение
  - [ ] prod-данные (PostgreSQL, Redis, брокер — или управляемая БД)
  - [ ] Code Runner (изолированно)
- [ ] Поддомены: `api.`, `admin.`, `staging.`
- [ ] S3-бакеты по окружениям
- [ ] Менеджер паролей
- [ ] Документ «Видение v2.0»
- [ ] Организация GitHub Projects (поля выше)
