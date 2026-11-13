# Задачи по командам

Задачи распределены между четырьмя командами: бизнес-аналитика, бэкенд, ИБ, ML. Системного аналитика в проекте нет: его задачи забрали бизнес-аналитики (документация, глоссарий) и бэкенд (границы сервисов, схемы БД, OpenAPI).

**Правило:** «Старт» показывает только зависимости внутри своей команды. Результаты других команд перечислены в задаче в разделе «Параллельные входы (не блокируют)»: их не ждут, а сверяются, когда они появятся. Единственное исключение — SEC-5 (проверка уже написанного кода), это поздняя задача ИБ.

Метка `start-now` в GitHub — задачи, которые можно брать прямо сейчас.

## Бизнес-аналитика

| ID | Задача | Старт | Issue |
|---|---|---|---|
| [BA-1](BA-1.md) | Процессы регистрации и входа | **сразу** | [#2](https://github.com/mrkiro52/kiro-v2/issues/2) |
| [BA-2](BA-2.md) | Процессы соцсети и модерация | **сразу** | [#3](https://github.com/mrkiro52/kiro-v2/issues/3) |
| [BA-3](BA-3.md) | Требования к профилю | **сразу** | [#4](https://github.com/mrkiro52/kiro-v2/issues/4) |
| [BA-5](BA-5.md) | Структура документации и шаблоны | **сразу** | [#1](https://github.com/mrkiro52/kiro-v2/issues/1) |
| [BA-6](BA-6.md) | Глоссарий и доменная модель | **сразу** | [#9](https://github.com/mrkiro52/kiro-v2/issues/9) |
| [BA-4](BA-4.md) | Пользовательские истории MVP | после BA-1, BA-2, BA-3 | [#8](https://github.com/mrkiro52/kiro-v2/issues/8) |

## Бэкенд (бэкендеры и фуллстаки)

| ID | Задача | Старт | Issue |
|---|---|---|---|
| [DEV-1](DEV-1.md) | Стек и шаблон сервиса (ADR) | **сразу** | [#5](https://github.com/mrkiro52/kiro-v2/issues/5) |
| [DEV-2](DEV-2.md) | Монорепозиторий и локальное окружение | **сразу** | [#6](https://github.com/mrkiro52/kiro-v2/issues/6) |
| [DEV-4](DEV-4.md) | Макеты в Figma | **сразу** | [#16](https://github.com/mrkiro52/kiro-v2/issues/16) |
| [DEV-20](DEV-20.md) | Границы сервисов Auth / Users / Social и события | **сразу** | [#10](https://github.com/mrkiro52/kiro-v2/issues/10) |
| [DEV-3](DEV-3.md) | CI | после DEV-2 | [#12](https://github.com/mrkiro52/kiro-v2/issues/12) |
| [DEV-7](DEV-7.md) | Брокер событий и библиотека публикации/подписки | после DEV-1, DEV-2, DEV-20 | [#20](https://github.com/mrkiro52/kiro-v2/issues/20) |
| [DEV-21](DEV-21.md) | Схемы БД | после DEV-20 | [#13](https://github.com/mrkiro52/kiro-v2/issues/13) |
| [DEV-18](DEV-18.md) | Staging: деплой, CD, мониторинг и логи | после DEV-3, DEV-2 | [#31](https://github.com/mrkiro52/kiro-v2/issues/31) |
| [DEV-22](DEV-22.md) | OpenAPI-контракты | после DEV-21, DEV-1 | [#17](https://github.com/mrkiro52/kiro-v2/issues/17) |
| [DEV-5](DEV-5.md) | Прототип сервиса Auth | после DEV-22, DEV-1, DEV-3 | [#18](https://github.com/mrkiro52/kiro-v2/issues/18) |
| [DEV-6](DEV-6.md) | Gateway: маршрутизация и проверка токена | после DEV-3, DEV-5, DEV-22 | [#19](https://github.com/mrkiro52/kiro-v2/issues/19) |
| [DEV-8](DEV-8.md) | Auth: полный контракт (выход, refresh, восстановление, блокировки) | после DEV-5, DEV-7, DEV-6 | [#21](https://github.com/mrkiro52/kiro-v2/issues/21) |
| [DEV-9](DEV-9.md) | Users: сервис профилей и приватности | после DEV-5, DEV-6, DEV-7, DEV-22 | [#22](https://github.com/mrkiro52/kiro-v2/issues/22) |
| [DEV-10](DEV-10.md) | Аватары: загрузка и хранение в S3 | после DEV-9 | [#23](https://github.com/mrkiro52/kiro-v2/issues/23) |
| [DEV-11](DEV-11.md) | Social: посты, комментарии, ответы на комментарии | после DEV-5, DEV-6, DEV-7, DEV-9 | [#24](https://github.com/mrkiro52/kiro-v2/issues/24) |
| [DEV-14](DEV-14.md) | Фронтенд: регистрация, вход, восстановление | после DEV-4, DEV-6, DEV-8 | [#27](https://github.com/mrkiro52/kiro-v2/issues/27) |
| [DEV-12](DEV-12.md) | Social: лайки и жалобы | после DEV-11 | [#25](https://github.com/mrkiro52/kiro-v2/issues/25) |
| [DEV-15](DEV-15.md) | Фронтенд: профиль пользователя и страница чужого профиля | после DEV-14, DEV-9, DEV-10 | [#28](https://github.com/mrkiro52/kiro-v2/issues/28) |
| [DEV-19](DEV-19.md) | Перенос пользователей и постов из v1 | после DEV-21, DEV-9, DEV-11 | [#34](https://github.com/mrkiro52/kiro-v2/issues/34) |
| [DEV-13](DEV-13.md) | Social: лента и посты пользователя | после DEV-11, DEV-12 | [#26](https://github.com/mrkiro52/kiro-v2/issues/26) |
| [DEV-17](DEV-17.md) | Админка: модерация жалоб и контента | после DEV-12, DEV-6, DEV-14 | [#30](https://github.com/mrkiro52/kiro-v2/issues/30) |
| [DEV-16](DEV-16.md) | Фронтенд: лента, посты, комментарии, ответы, лайки | после DEV-14, DEV-13 | [#29](https://github.com/mrkiro52/kiro-v2/issues/29) |
| [QA-1](QA-1.md) | Сквозные тесты и приёмка MVP | после DEV-16, DEV-17, DEV-18 | [#32](https://github.com/mrkiro52/kiro-v2/issues/32) |

## ИБ

| ID | Задача | Старт | Issue |
|---|---|---|---|
| [SEC-1](SEC-1.md) | Threat model | **сразу** | [#11](https://github.com/mrkiro52/kiro-v2/issues/11) |
| [SEC-2](SEC-2.md) | Требования к Auth | **сразу** | [#14](https://github.com/mrkiro52/kiro-v2/issues/14) |
| [SEC-3](SEC-3.md) | Требования к контенту и файлам | **сразу** | [#15](https://github.com/mrkiro52/kiro-v2/issues/15) |
| [SEC-4](SEC-4.md) | Проверки безопасности в CI | **сразу** | [#7](https://github.com/mrkiro52/kiro-v2/issues/7) |
| [SEC-6](SEC-6.md) | Безопасная настройка доступов, секретов и серверов | **сразу** | [#36](https://github.com/mrkiro52/kiro-v2/issues/36) |
| [SEC-5](SEC-5.md) | Проверка безопасности реализации MVP | после SEC-1, DEV-8, DEV-10, DEV-13 | [#33](https://github.com/mrkiro52/kiro-v2/issues/33) |

## ML

| ID | Задача | Старт | Issue |
|---|---|---|---|
| [ML-0](ML-0.md) | Идеи ML для авторизации, регистрации и соцсети v2.0 | **сразу** | [#35](https://github.com/mrkiro52/kiro-v2/issues/35) |
