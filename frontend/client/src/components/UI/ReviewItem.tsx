import {type ReviewItemType } from "../../types/ReviewItemType"



const ReviewItem = ({id, feedId, author, publishedAt, text, likeCount}: ReviewItemType) => {
    return(
        <article className="min-w-0 py-4 last:pb-0">
            <p className="font-mono text-xs/4 text-text-tertiary empty:hidden">{id}</p>
            <p className="font-mono text-xs/4 text-text-tertiary empty:hidden">{feedId}</p>
            <header className="grid gap-1">
                <p className="text-[13px]/5 font-medium wrap-anywhere text-text-primary">{author}</p>
                <p className="font-mono text-[13px]/5 tabular-nums text-text-tertiary">{publishedAt}</p>
            </header>
            <p className="mt-3 text-sm/5.5 whitespace-pre-line wrap-anywhere text-text-secondary">{text}</p>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-bg-tertiary px-2.5 py-1.5 text-xs/4 font-semibold tabular-nums text-text-secondary">
                <svg aria-hidden="true" className="size-4 text-text-tertiary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                </svg>
                {likeCount}
            </p>
        </article>
    )
}

export default ReviewItem
