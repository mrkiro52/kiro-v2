import { Link } from "@tanstack/react-router"
import FeedCard from "../components/UI/FeedCard"
import { MockFeed } from "../mock/FeedMock"
import { type FeedCardType } from "../types/FeedCard"
import ReportDialog from "../components/UI/ReportDialog"
import { useState } from "react"




const FeedPage = () => {

    const [reportPostId, setReportPostId] = useState<number | null>(null)


    return (
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(240px,32%)]">
            <div className="min-w-0">
                {MockFeed.map((feedCard: FeedCardType) => (
                    <FeedCard
                    key={feedCard.id}
                        {...feedCard}
                    onReport={setReportPostId}
                    />
                ))}
                {reportPostId !== null && <ReportDialog
                    postId={reportPostId}
                    onClose={() => setReportPostId(null)}
                />}
            </div>
            <div className="grid min-w-0 gap-4">
                <div className="widget p-4.5">
                    <h1 className="font-display text-sm/[18px] font-bold text-text-primary">Мои посты</h1>
                    <p className="mt-3 text-sm/5.5 text-text-secondary">Здесь можно найти и отредактировать свои публикации.</p>
                    <Link
                        to="/profile/profile"
                        className="mt-4 inline-flex min-h-8 items-center rounded-radius-sm px-1 text-[15px]/5 font-bold text-accent-lime hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
                    >
                        Открыть мои посты
                    </Link>
                </div>
                <div className="widget p-4.5">
                    <h1 className="font-display text-sm/[18px] font-bold text-text-primary">О чем писать</h1>
                    <p className="mt-3 text-sm/5.5 text-text-secondary">Поделись находкой с тренировки, задай вопрос по задаче или покажи свой учебный проект.</p>
                    <Link to="/feed/create" className="mt-4 inline-flex min-h-8 items-center rounded-radius-sm px-1 text-[15px]/5 font-bold text-accent-lime hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime">Написать пост</Link>
                </div>
            </div>
        </div>
    )
}

export default FeedPage
