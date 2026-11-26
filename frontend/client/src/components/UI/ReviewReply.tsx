import { type ReviewItemType } from "../../types/ReviewItemType"

const ReviewReply = (reviewReply: ReviewItemType) => {
    return (
        <article className="mt-4 min-w-0 rounded-radius-sm bg-bg-tertiary px-5.5 py-2.5">
            <header className="flex items-center gap-2">
                <div className="grid min-w-0 flex-1 gap-1">
                    <p className="text-xs/4 font-medium wrap-anywhere text-text-primary">{reviewReply.author}</p>
                    <p className="font-mono text-xs/4 tabular-nums text-text-tertiary">{reviewReply.publishedAt}</p>
                </div>
                <span aria-hidden="true" className="shrink-0 font-mono text-base/5 font-bold text-text-tertiary">⋯</span>
            </header>
            <p className="mt-2 text-[13px]/5 whitespace-pre-line wrap-anywhere text-text-secondary">{reviewReply.text}</p>
            <p className="mt-2 inline-flex items-center gap-1 px-2 py-1 font-mono text-[11px]/4 tabular-nums text-text-tertiary">
                <svg aria-hidden="true" className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                </svg>
                {reviewReply.likeCount}
            </p>
        </article>
    )
}

export default ReviewReply
