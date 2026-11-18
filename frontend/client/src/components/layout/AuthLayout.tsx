import { Outlet } from "@tanstack/react-router"

const AuthLayout = () => {
    return (
        <div className="min-h-screen bg-bg-primary p-6 text-text-primary max-md:p-4">
            <div className="mx-auto grid min-h-[calc(100vh-3rem)] grid-cols-[80fr_90fr] max-md:min-h-[calc(100vh-2rem)] max-md:grid-cols-1">
                <aside className="flex min-h-[calc(100vh-3rem)] flex-col rounded-[20px] bg-bg-secondary px-32 py-12 max-lg:px-8 max-md:min-h-0 max-md:px-6 max-md:py-8">
                    <header>
                        <p className="font-display text-[23px] font-extrabold leading-tight tracking-[0.04em] text-accent-lime">
                            KIRO PLATFORM
                        </p>
                        <p className="mt-3 text-[11px] font-bold tracking-[0.08em] text-text-tertiary">
                            ЗАКРЫТАЯ ОБРАЗОВАТЕЛЬНАЯ ПЛАТФОРМА
                        </p>
                    </header>

                    <div className="flex flex-1 flex-col justify-center py-16 max-md:py-12">
                        <h1 className="max-w-100 font-display text-[40px] font-bold leading-[1.32] tracking-[-0.03em] max-lg:text-[34px] max-md:text-[32px]">
                            Твой следующий шаг в IT.
                        </h1>
                        <p className="mt-7 max-w-57.5 text-[15px] leading-7 text-[#c2c2be]">
                            От первого «как это работает» до уверенного «я умею».
                        </p>

                        <ul className="mt-4 max-w-75">
                            <li className="flex gap-8 border-t border-[#26262e] py-5">
                                <span className="w-4 shrink-0 font-mono text-[12px] text-text-tertiary">01</span>
                                <div>
                                    <h2 className="text-[14px] font-semibold">Лагеря</h2>
                                    <p className="mt-1 text-[13px] leading-5 text-text-tertiary">Учись вместе с командой</p>
                                </div>
                            </li>
                            <li className="flex gap-8 border-t border-[#26262e] py-5">
                                <span className="w-4 shrink-0 font-mono text-[12px] text-text-tertiary">02</span>
                                <div>
                                    <h2 className="text-[14px] font-semibold">Ликбезы</h2>
                                    <p className="mt-1 text-[13px] leading-5 text-text-tertiary">Разбирай сложное по шагам</p>
                                </div>
                            </li>
                            <li className="flex gap-8 border-t border-[#26262e] py-5">
                                <span className="w-4 shrink-0 font-mono text-[12px] text-text-tertiary">03</span>
                                <div>
                                    <h2 className="text-[14px] font-semibold">Тренажёры</h2>
                                    <p className="mt-1 text-[13px] leading-5 text-text-tertiary">Закрепляй знания на практике</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <footer className="text-[12px] text-text-tertiary">kiroplatform.ru</footer>
                </aside>

                <main className="grid min-w-0 place-items-center px-12 py-12 max-lg:px-8 max-md:min-h-[60vh] max-md:px-6 max-md:py-12">
                    <div className="w-full max-w-108">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default AuthLayout