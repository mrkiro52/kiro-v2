export type MessageListItemProps = {
    id: number
    sender: string
    date: string
    subject: string
    preview: string
    unread?: boolean
    selected?: boolean
}