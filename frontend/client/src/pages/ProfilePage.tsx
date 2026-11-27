import { Link } from "@tanstack/react-router"



const ProfilePage = () => {
    return (
        <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)]">
            <h1 className="font-display text-[28px]/[34px] font-bold tracking-[-0.3px] lg:col-span-2">
                Мой профиль
            </h1>

            <div className="grid min-w-0 gap-4">
                <article className="widget p-4.5">
                    <header className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex min-w-0 items-center gap-4">
                            <div className="grid min-w-0 gap-1">
                                <h2 className="font-display text-[17px]/5.5 font-bold">Киреев Ханиль</h2>
                                <p className="text-[13px]/5 font-medium text-text-secondary">@x_tap</p>
                                <p className="text-xs/4 font-semibold text-text-tertiary">ML</p>
                            </div>
                        </div>
                        <Link to="/profile/editprofile">
                            <button className="btn btn-ghost w-full px-4 py-3 text-[15px]/5 font-bold text-text-primary hover:text-accent-lime sm:w-auto">
                                Редактировать профиль
                            </button>
                        </Link>
                    </header>
                    <p className="mt-3 text-[15px]/6 text-text-secondary">Старший fullstack разработчик</p>
                </article>

                <section className="widget p-4.5">
                    <h2 className="font-display text-sm/[18px] font-bold">Мои посты</h2>
                    <p className="mt-3 rounded-radius-md border border-border-color bg-bg-tertiary p-4.5 text-text-secondary">
                        Скоро тут будут твои посты
                    </p>
                </section>
            </div>

            <section className="widget min-w-0 p-4.5">
                <h2 className="font-display text-sm/[18px] font-bold">Ссылки</h2>
                <dl className="mt-3 grid gap-3">
                    <div className="rounded-radius-sm bg-bg-tertiary px-3 py-2">
                        <dt className="text-[13px]/5 font-medium">Github</dt>
                        <dd className="mt-1 text-xs/4 font-semibold wrap-anywhere text-text-secondary">https://github.com/mrkiro52</dd>
                    </div>
                    <div className="rounded-radius-sm bg-bg-tertiary px-3 py-2">
                        <dt className="text-[13px]/5 font-medium">Telegram</dt>
                        <dd className="mt-1 text-xs/4 font-semibold wrap-anywhere text-text-secondary">t.me/x_tap</dd>
                    </div>
                </dl>
            </section>
        </div>
    )
}

export default ProfilePage
