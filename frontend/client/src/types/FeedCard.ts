export interface FeedCardType {
    id: number
    author: string
    authorId?: number | undefined
    publishedAt: string
    title: string
    description: string
    likeCount: number
    commentCount: number
}
