import { useState } from "react"

import { Route } from "../routes/_app/profile/$userId"
import { MockUsers } from "../mock/UserMock"
import { MockFeed } from "../mock/FeedMock"
import FeedCard from "../components/UI/FeedCard"



const UserProfile = () => {
    
    const [reportPostId, setReportPostId] = useState<number | null>(null)

    const { userId } = Route.useParams()
    const user = MockUsers.find((user) => String(user.id) === userId)
    const posts = MockFeed.filter((post) => String(post.authorId) == userId)





    return (
        <>
            <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
                <h1 className="font-display text-[28px]/[34px] font-bold tracking-[-0.3px] lg:col-span-2">
                    Профиль пользователя
                </h1>

                <div className="grid min-w-0 gap-4">
                    <article className="widget p-4.5">
                        <header className="flex flex-wrap items-center justify-between gap-4">
                            <div className="flex min-w-0 items-center gap-4">
                                <div className="grid min-w-0 gap-1">
                                    <h2 className="font-display text-[17px]/5.5 font-bold">{user?.name}</h2>
                                    <p className="text-[13px]/5 font-medium text-text-secondary">{user?.bio}</p>
                                    <p className="text-xs/4 font-semibold text-text-tertiary">{user?.specialization}</p>
                                </div>
                            </div>
                        </header>
                        <p className="mt-3 text-[15px]/6 text-text-secondary">{user?.about}</p>
                    </article>

                    <section className="widget p-4.5">
                        <h2 className="font-display text-sm/[18px] font-bold">Посты</h2>
                        <p className="mt-3 rounded-radius-md border border-border-color bg-bg-tertiary p-4.5 text-text-secondary">
                            {posts.map((post) => (
                                <FeedCard
                                    key={post.id}
                                    {...post}
                                    onReport={setReportPostId}
                                />
                            ))}
                        </p>
                    </section>
                </div>

                <section className="widget min-w-0 p-4.5">
                    <h2 className="font-display text-sm/[18px] font-bold">Ссылки</h2>
                    <dl className="mt-3 grid gap-3">
                        {user?.links.map((link) => (
                            <div className="rounded-radius-sm bg-bg-tertiary px-3 py-2">
                                <dt className="text-[13px]/5 font-medium">{link.label}</dt>
                                <dd className="mt-1 text-xs/4 font-semibold wrap-anywhere text-text-secondary">{link.url}</dd>
                            </div>
                        ))}
                    </dl>
                </section>
            </div>
        </>
    )
}

export default UserProfile
