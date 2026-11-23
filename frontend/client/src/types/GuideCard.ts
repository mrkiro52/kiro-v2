export interface GuideCardProps {
    id: number | string
    order: number
    category: string
    title: string
    description: string
    lessonCount: number
    duration: string
    completedLessons?: number
    onOpen: () => void
}
