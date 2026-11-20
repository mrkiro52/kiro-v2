export type MessageListItemProps = {
    sender: string
    date: string
    subject: string
    preview: string
    unread?: boolean
    selected?: boolean
}