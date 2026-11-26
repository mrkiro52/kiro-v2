import type { ReviewItemType } from "../types/ReviewItemType.ts"

export const MockCommentReplies: ReviewItemType [] = [
    {
        id: 1,
        reviewId: 1,
        author: "Алексей Морозов",
        publishedAt: "Сегодня, 15:08 МСК",
        text: "Попробую так на следующей задаче. Спасибо!",
        likeCount: 1
    },
    {
        id: 2,
        reviewId: 1,
        author: "Екатерина Волкова",
        publishedAt: "Сегодня, 15:21 МСК",
        text: "Я ещё подписала, из какой таблицы взялся каждый столбец. Так проще понять, откуда появился NULL.",
        likeCount: 2
    }
]
