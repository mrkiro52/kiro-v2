import { Link, Outlet } from "@tanstack/react-router"


const Layout = () => {


    return (
        <div className="flex min-h-screen w-full">
            <aside className="w-65 shrink-0 flex flex-col border-r border-border-color bg-bg-secondary p-4.5 font-sans max-md:w-14 max-md:px-2">
                <header className="max-md:sr-only">
                    <p className="font-display text-[22px]/[22px] font-extrabold tracking-[0.04em] text-accent-lime">
                        KIRO<br />
                        PLATFORM
                    </p>
                    <p className="mt-4 text-[11px]/[14px] font-bold tracking-[0.08em] text-text-tertiary uppercase">
                        Твой следующий шаг в IT
                    </p>
                </header>
                <div className="flex flex-col flex-1 justify-between">
                    <nav className="sidebar-nav">
                        <ul className="sidebar-nav-list">
                            <Link to="/dashboard" className="nav-item">Дэшборд</Link>
                            <Link to="/messages" className="nav-item">Сообщения</Link>
                            <Link to="/" className="nav-item">Тренировки</Link>
                            <Link to="/guide/guides" className="nav-item">Полные ликбезы</Link>
                            <Link to="/calendar" className="nav-item">Календарь</Link>
                        </ul>
                    </nav>

                    <button
                        className="sidebar-account"
                        type="button"
                        aria-labelledby="sidebar-account-label"
                        aria-describedby="sidebar-account-role"
                    >
                        <span className="sidebar-account-text">
                            <span id="sidebar-account-label">Личный кабинет</span>
                            <span id="sidebar-account-role">Участник платформы</span>
                        </span>
                    </button>
                </div>
            </aside>

            <main className="min-w-0 flex-1 font-sans text-sm/5.5 text-text-primary">
                <header className="flex min-h-16 items-center justify-between gap-4 bg-bg-secondary px-4 py-3 md:px-8">
                    <p className="text-xs/4 text-text-tertiary">
                        Платформа
                    </p>
                    <div className="flex items-center gap-4 text-text-secondary">
                        <p className="hidden text-xs/4 text-text-tertiary sm:block">
                            Учись в своём темпе
                        </p>
                        {/* TODO: Подключить открытие уведомлений. */}
                        <button type="button" aria-label="Уведомления" disabled>
                            <svg
                                aria-hidden="true"
                                className="size-5"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M10.268 21a2 2 0 0 0 3.464 0" />
                                <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8a6 6 0 0 0-12 0c0 4.499-1.411 5.956-2.738 7.326" />
                            </svg>
                        </button>
                    </div>
                </header>
                <div className="px-4 py-7 md:px-8">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default Layout
