import { Route } from "../routes/_app/feed/$feedId"
import { MockFeed } from "../mock/FeedMock"
import { MockComments } from "../mock/CommentMock"
import ReviewItem from "../components/UI/ReviewItem"
import ReviewForm from "../components/forms/ReviewForm"
import { useState } from "react"
import { type ReviewItemType } from "../types/ReviewItemType"
import { Link } from "@tanstack/react-router"

const FeedDetailPage = () => {

    const [viewForm, setViewForm] = useState(false)

    const { feedId } = Route.useParams()
    const feed = MockFeed.find((feed) => String(feed.id) === feedId)
    const comment = MockComments.filter((comment) => String(comment.feedId) === feedId)


    if (!feed){
        return <p className="widget w-full max-w-3xl px-4 py-8 text-center text-sm/5 text-text-secondary">Нету постов</p>
    }


    if (comment.length === 0) {
        return (
            <>
                <article className="widget min-w-0 p-4.5">
                    <Link to="/feed/feed" className="btn btn-ghost mb-3 inline-flex min-h-8 items-center font-sans">
                        Назад к постам
                    </Link>
                    <h1 className="font-display text-[22px]/7 font-bold tracking-[-0.3px] wrap-anywhere sm:text-[28px]/[34px]">{feed.title}</h1>
                    <p className="mt-4 text-[15px]/6 whitespace-pre-line wrap-anywhere text-text-secondary">{feed.description}</p>
                </article>
                <p className="max-w-3xl px-4 py-8 text-sm/5 text-text-secondary">Нету комментариев</p>
                <button className="btn btn-primary mt-4 sm:w-fit sm:px-14" onClick={() => setViewForm(!viewForm)}>Оставить комментарий</button>
                {viewForm && <ReviewForm />}
            </>
        )
    }

    return (
        <div className="grid w-full max-w-3xl gap-4">
            <article className="widget min-w-0 p-4.5">
                <Link to="/feed/feed" className="btn btn-ghost mb-3 inline-flex min-h-8 items-center font-sans">
                    Назад к постам
                </Link>
                <h1 className="font-display text-[22px]/7 font-bold tracking-[-0.3px] wrap-anywhere sm:text-[28px]/[34px]">{feed.title}</h1>
                <p className="mt-4 text-[15px]/6 whitespace-pre-line wrap-anywhere text-text-secondary">{feed.description}</p>
            </article>
            <section className="widget min-w-0 p-4.5">
                <h2 className="font-display text-[17px]/[22px] font-bold">Комментарии</h2>
                <div className="mt-3 divide-y divide-border-color empty:hidden">
                    {comment.map((comments : ReviewItemType) => (
                        <ReviewItem
                            key={comments.id}
                            id={comments.id}
                            author={comments.author}
                            publishedAt={comments.publishedAt}
                            text={comments.text}
                            likeCount={comments.likeCount}
                        />
                    ))}
                </div>
                <button className="btn btn-primary mt-4 sm:w-fit sm:px-14" onClick={() => setViewForm(!viewForm)}>Оставить комментарий</button>
                {viewForm && <ReviewForm />}
            </section>
        </div>
    )
}
export default FeedDetailPage
