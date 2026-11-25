import type { MessageListItemProps } from "../types/MessageListItem"

export const MockMessages: MessageListItemProps[] = [
    {
        id: 1,
        sender: "Команда KIRO",
        date: "18 ноя",
        subject: "Завтра разбор задач",
        preview: "JOIN без боли · 20:00 МСК",
        unread: true,
        selected: true,
    },
    {
        id: 2,
        sender: "Наставник",
        date: "18 ноя",
        subject: "Проверь обратную связь",
        preview: "В задаче №3 нужны правки",
        unread: true,
    },
    {
        id: 3,
        sender: "Платформа",
        date: "17 ноя",
        subject: "Дедлайн уже в календаре",
        preview: "Сдать ДЗ до 20 ноября",
        unread: true,
    },
    {
        id: 4,
        sender: "Наставник",
        date: "16 ноя",
        subject: "Решение принято",
        preview: "Отличная работа с SELECT",
    },
    {
        id: 5,
        sender: "Команда KIRO",
        date: "15 ноя",
        subject: "Материалы встречи",
        preview: "Запись и полезные ссылки",
    },
    {
        id: 6,
        sender: "Платформа",
        date: "12 ноя",
        subject: "Добро пожаловать в KIRO",
        preview: "Твой маршрут обучения",
    },
]
