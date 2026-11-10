# Подробные описания задач спринта 1

Каждый файл — полное ТЗ на задачу; то же самое лежит в теле issue в GitHub.

| ID | Задача | Исполнитель | Волна | Issue |
|---|---|---|---|---|
| [SA-1](SA-1.md) | Структура документации и шаблоны | Системный аналитик | 1 | [#1](https://github.com/mrkiro52/kiro-v2/issues/1) |
| [BA-1](BA-1.md) | Процессы регистрации и входа | Бизнес-аналитик | 1 | [#2](https://github.com/mrkiro52/kiro-v2/issues/2) |
| [BA-2](BA-2.md) | Процессы соцсети и модерация | Бизнес-аналитик | 1 | [#3](https://github.com/mrkiro52/kiro-v2/issues/3) |
| [BA-3](BA-3.md) | Требования к профилю | Бизнес-аналитик | 1 | [#4](https://github.com/mrkiro52/kiro-v2/issues/4) |
| [DEV-1](DEV-1.md) | Стек и шаблон сервиса (ADR) | Бэкендер / архитектор | 1 | [#5](https://github.com/mrkiro52/kiro-v2/issues/5) |
| [DEV-2](DEV-2.md) | Монорепозиторий и локальное окружение | Бэкендер / DevOps | 1 | [#6](https://github.com/mrkiro52/kiro-v2/issues/6) |
| [SEC-4](SEC-4.md) | Проверки безопасности в CI | Специалист ИБ | 1 | [#7](https://github.com/mrkiro52/kiro-v2/issues/7) |
| [BA-4](BA-4.md) | Пользовательские истории MVP | Бизнес-аналитик | 2 | [#8](https://github.com/mrkiro52/kiro-v2/issues/8) |
| [SA-2](SA-2.md) | Глоссарий и доменная модель | Системный аналитик | 2 | [#9](https://github.com/mrkiro52/kiro-v2/issues/9) |
| [SA-3](SA-3.md) | Границы сервисов Auth / Users / Social и события | Системный аналитик | 2 | [#10](https://github.com/mrkiro52/kiro-v2/issues/10) |
| [SEC-1](SEC-1.md) | Threat model | Специалист ИБ | 2 | [#11](https://github.com/mrkiro52/kiro-v2/issues/11) |
| [DEV-3](DEV-3.md) | CI | Бэкендер / DevOps | 2 | [#12](https://github.com/mrkiro52/kiro-v2/issues/12) |
| [SA-4](SA-4.md) | Схемы БД | Системный аналитик | 3 | [#13](https://github.com/mrkiro52/kiro-v2/issues/13) |
| [SEC-2](SEC-2.md) | Требования к Auth | Специалист ИБ | 3 | [#14](https://github.com/mrkiro52/kiro-v2/issues/14) |
| [SEC-3](SEC-3.md) | Требования к контенту и файлам | Специалист ИБ | 3 | [#15](https://github.com/mrkiro52/kiro-v2/issues/15) |
| [DEV-4](DEV-4.md) | Макеты в Figma | Фуллстак / дизайнер | 3 | [#16](https://github.com/mrkiro52/kiro-v2/issues/16) |
| [SA-5](SA-5.md) | OpenAPI-контракты | Системный аналитик | 4 | [#17](https://github.com/mrkiro52/kiro-v2/issues/17) |
| [DEV-5](DEV-5.md) | Прототип сервиса Auth | Бэкендер | 5 | [#18](https://github.com/mrkiro52/kiro-v2/issues/18) |

## Реализация MVP (этапы 2–3)

Задачи, которые нужны, чтобы после спринта 1 появились рабочие регистрация, вход, профили, посты, комментарии, ответы и лайки.

| ID | Задача | Исполнитель | Этап | Issue |
|---|---|---|---|---|
| [DEV-6](DEV-6.md) | Gateway: маршрутизация и проверка токена | Бэкендер / DevOps | Этап 2 (Фундамент) | [#19](https://github.com/mrkiro52/kiro-v2/issues/19) |
| [DEV-7](DEV-7.md) | Брокер событий и библиотека публикации/подписки | Бэкендер | Этап 2 (Фундамент) | [#20](https://github.com/mrkiro52/kiro-v2/issues/20) |
| [DEV-8](DEV-8.md) | Auth: полный контракт (выход, refresh, восстановление, блокировки) | Бэкендер | Этап 2 (Фундамент) | [#21](https://github.com/mrkiro52/kiro-v2/issues/21) |
| [DEV-9](DEV-9.md) | Users: сервис профилей и приватности | Бэкендер | Этап 3 (MVP) | [#22](https://github.com/mrkiro52/kiro-v2/issues/22) |
| [DEV-10](DEV-10.md) | Аватары: загрузка и хранение в S3 | Бэкендер | Этап 3 (MVP) | [#23](https://github.com/mrkiro52/kiro-v2/issues/23) |
| [DEV-11](DEV-11.md) | Social: посты, комментарии, ответы на комментарии | Бэкендер | Этап 3 (MVP) | [#24](https://github.com/mrkiro52/kiro-v2/issues/24) |
| [DEV-12](DEV-12.md) | Social: лайки и жалобы | Бэкендер | Этап 3 (MVP) | [#25](https://github.com/mrkiro52/kiro-v2/issues/25) |
| [DEV-13](DEV-13.md) | Social: лента и посты пользователя | Бэкендер | Этап 3 (MVP) | [#26](https://github.com/mrkiro52/kiro-v2/issues/26) |
| [DEV-14](DEV-14.md) | Фронтенд: регистрация, вход, восстановление | Фуллстак | Этап 3 (MVP) | [#27](https://github.com/mrkiro52/kiro-v2/issues/27) |
| [DEV-15](DEV-15.md) | Фронтенд: профиль пользователя и страница чужого профиля | Фуллстак | Этап 3 (MVP) | [#28](https://github.com/mrkiro52/kiro-v2/issues/28) |
| [DEV-16](DEV-16.md) | Фронтенд: лента, посты, комментарии, ответы, лайки | Фуллстак | Этап 3 (MVP) | [#29](https://github.com/mrkiro52/kiro-v2/issues/29) |
| [DEV-17](DEV-17.md) | Админка: модерация жалоб и контента | Фуллстак | Этап 3 (MVP) | [#30](https://github.com/mrkiro52/kiro-v2/issues/30) |
| [DEV-18](DEV-18.md) | Staging: деплой, CD, мониторинг и логи | DevOps / бэкендер | Этап 2 (Фундамент) | [#31](https://github.com/mrkiro52/kiro-v2/issues/31) |
| [QA-1](QA-1.md) | Сквозные тесты и приёмка MVP | QA / фуллстак | Этап 3 (MVP) | [#32](https://github.com/mrkiro52/kiro-v2/issues/32) |
| [SEC-5](SEC-5.md) | Проверка безопасности реализации MVP | Специалист ИБ | Этап 3 (MVP) | [#33](https://github.com/mrkiro52/kiro-v2/issues/33) |
| [DEV-19](DEV-19.md) | Перенос пользователей и постов из v1 | Бэкендер / системный аналитик | Этап 3 (MVP) | [#34](https://github.com/mrkiro52/kiro-v2/issues/34) |

## ML/AI

| ID | Задача | Исполнитель | Issue |
|---|---|---|---|
| [ML-0](ML-0.md) | Изучить платформу v1 и подготовить идеи | ML-разработчик | [#35](https://github.com/mrkiro52/kiro-v2/issues/35) |
