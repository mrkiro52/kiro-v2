import { Outlet } from "@tanstack/react-router"
import {Link}  from "@tanstack/react-router"

const Layout = () => {
    return (
        <div className="flex min-h-screen w-full">
            <aside className="w-65 shrink-0 border-r border-border-color bg-bg-secondary p-4.5 font-sans max-md:w-14 max-md:px-2">
                <header className="max-md:sr-only">
                    <p className="font-display text-[22px]/[22px] font-extrabold tracking-[0.04em] text-accent-lime">
                        KIRO<br />
                        PLATFORM
                    </p>
                    <p className="mt-4 text-[11px]/[14px] font-bold tracking-[0.08em] text-text-tertiary uppercase">
                        Твой следующий шаг в IT
                    </p>
                </header>
                <nav className="sidebar-nav">
                    <ul className="sidebar-nav-list">
                        <Link to="/home" className="nav-item">Дэшборд</Link>
                        <Link to="/" className="nav-item">Сообщения</Link>
                        <Link to="/" className="nav-item">Тренировки</Link>
                        <Link to="/" className="nav-item">Полные ликбезы</Link>
                        <Link to="/" className="nav-item">Календарь</Link>
                    </ul>
                </nav>
            </aside>

            <main className="min-w-0 flex-1">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout
