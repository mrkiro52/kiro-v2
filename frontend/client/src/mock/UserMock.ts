import { type UserProfileType } from "../types/UserProfileType"

export const MockUsers: UserProfileType[] = [
    {
        id: "1",
        name: "Алексей Морозов",
        username: "alex_morozov",
        specialization: "Backend",
        about: 'Занимаюсь бекенд разработкой',
        bio: "Изучаю Go и PostgreSQL. Делюсь примерами SQL-запросов, которые помогли мне разобраться в теме.",
        links: [
            { label: "GitHub", url: "https://example.com/github/alex_morozov" },
            { label: "Telegram", url: "https://example.com/telegram/alex_morozov" },
        ],
        postIds: [1],
    },
    {
        id: "2",
        name: "Мария Смирнова",
        username: "maria_smirnova",
        about: 'Занимаюсь фронтенд разработкой',
        specialization: "Data Analytics",
        bio: "Разбираюсь в аналитике данных и собираю конспекты по SQL на небольших наборах данных.",
        links: [
            { label: "GitHub", url: "https://example.com/github/maria_smirnova" },
        ],
        postIds: [2],
    },
    {
        id: "3",
        name: "Дарья Никифорова",
        username: "daria_nikiforova",
        specialization: "Frontend",
        about: 'Занимаюсь машинным обучением',
        bio: "Учусь делать интерфейсы на React и решаю задачи по SQL между проектами.",
        links: [],
        postIds: [],
    },
]
