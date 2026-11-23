import type { GuideCardProps } from "../types/GuideCard";


const open = () => {
    console.log('привет')
}

export const MockGuide: GuideCardProps[] = [
    {
        id: 1,
        order: 1,
        category: "База IT",
        title: "Как устроен IT",
        description: "Роли, команды и процессы.",
        lessonCount: 8,
        duration: '120',
        completedLessons: 1,
        onOpen: open
    },
    {
        id: 2,
        order: 2,
        category: "База IT 2",
        title: "Как устроен IT 2",
        description: "Роли, команды и процессы. 2",
        lessonCount: 10,
        duration: '122',
        completedLessons: 1,
        onOpen: open
    }
]
