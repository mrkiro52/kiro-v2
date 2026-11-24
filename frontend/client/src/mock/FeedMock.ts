import { type FeedCard } from "../types/FeedCard"



export const MockFeed: FeedCard[] = [
    {
        id: 1,
        author: "Алексей Морозов",
        publishedAt: "Сегодня, 14:32 МСК",
        title: "Как я наконец понял LEFT JOIN",
        description: "Долго путал, где ставить условия после LEFT JOIN. Помогло представить две таблицы: студенты и сданные задачи. Если перенести проверку статуса из WHERE в ON, в выдаче останутся и студенты без сданных задач.\n\nКому тоже помог конкретный пример?",
        likeCount: 12,
        commentCount: 3
    },
    {
        id: 2,
        author: "Мария Смирнова",
        publishedAt: "Вчера, 19:40 МСК",
        title: "Мой конспект по оконным функциям",
        description: "Собрала примеры для ROW_NUMBER и RANK. Предлагаю сравнить результаты на данных с одинаковыми значениями.",
        likeCount: 7,
        commentCount: 0
    }
]
