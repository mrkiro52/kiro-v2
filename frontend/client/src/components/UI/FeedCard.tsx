import { type FeedCardType } from "../../types/FeedCard"
import { Link } from "@tanstack/react-router"


const FeedCard = (feedCard: FeedCardType) => {



    return (
        <>
            <article className="widget min-w-0 p-4.5 font-sans text-text-primary mb-5">
                <header className="grid gap-1">
                    <h1 className="text-[13px]/5 font-medium wrap-anywhere">{feedCard.author}</h1>
                    <span className="font-mono text-[13px]/5 text-text-tertiary">{feedCard.publishedAt}</span>
                </header>
                <main className="mt-3">
                    <h1 className="font-display text-[17px]/5.5 font-bold wrap-anywhere">{feedCard.title}</h1>
                    <p className="mt-2 text-sm/5.5 wrap-anywhere whitespace-pre-line text-text-secondary">{feedCard.description}</p>
                </main>
                <footer className="mt-3 border-t border-border-color pt-3">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-bg-tertiary px-2 py-2 text-xs/4 font-semibold text-text-secondary tabular-nums">{feedCard.likeCount}</span>
                        <span className="rounded-full bg-bg-tertiary px-2 py-2 text-xs/4 font-semibold text-text-secondary tabular-nums">{feedCard.commentCount}</span>
                        <Link
                            to="/feed/$feedId"
                            params={{ feedId: String(feedCard.id) }}
                        >
                            <button className="min-h-8 cursor-pointer rounded-full px-1 text-[15px]/5 font-bold text-accent-lime hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime">
                                Открыть пост
                            </button>
                        </Link>
                        <button className="min-h-8 cursor-pointer rounded-full px-1 text-[15px]/5 font-bold text-accent-lime hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime">
                            Оставить комментарий
                        </button>
                    </div>
                </footer>
            </article>
        </>
    )
}


export default FeedCard
