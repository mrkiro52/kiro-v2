import { type MessageListItemProps } from "../../types/MessageListItem"

const MessageListItem = ({ sender, date, subject, preview, unread, selected }: MessageListItemProps) => {
    return (
        <li>
            <button
                className="w-full rounded-radius-sm p-4 text-left enabled:hover:bg-bg-tertiary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime aria-current:bg-bg-tertiary"
                type="button"
                aria-current={selected || undefined}
                disabled
            >
                <span className="block text-[11px]/[14px] font-semibold text-text-tertiary uppercase">
                    {sender} · {date}
                </span>
                <span className={`mt-1 block ${unread ? "font-semibold" : "font-medium"}`}>
                    {unread && (
                        <>
                            <span className="sr-only">Непрочитанное. </span>
                            <span className="mr-2" aria-hidden="true">•</span>
                        </>
                    )}
                    {subject}
                </span>
                <span className="mt-1 block text-xs/4 text-text-tertiary">{preview}</span>
            </button>
        </li>
    )
}

export default MessageListItem
