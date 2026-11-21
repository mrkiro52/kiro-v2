import Card from "../components/UI/Card"

const Dashboard = () => {
    return (
        <>
            <div className="mb-6">
                <h1 className="font-display text-[28px]/[34px] font-bold tracking-[-0.3px]">Дэшборд</h1>
                <p className="mt-1 text-[15px]/6 text-text-secondary">Твой следующий шаг в IT — сегодня.</p>
            </div>

            <div className="grid gap-4">
                <section className="widget grid items-center gap-6 p-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-8">
                    <div>
                        <p className="text-[11px]/[14px] font-bold tracking-[0.08em] text-text-tertiary uppercase">
                            Продолжи с того же места
                        </p>
                        {/* TODO: Подставить текущий курс, следующий урок, прогресс и длительность из моков. */}
                        <h2 className="mt-3 font-display text-[17px]/5.5 font-bold">
                            SQL: от запроса к результату
                        </h2>
                        <p className="mt-3 text-text-secondary">
                            Урок 5 из 12 · Объединение таблиц с JOIN
                        </p>
                        <progress
                            aria-label="Прогресс по курсу SQL"
                            className="dashboard-progress mt-2"
                            value={4}
                            max={12}
                        />
                        <p className="mt-3 text-xs/4 text-text-tertiary">
                            4 урока позади. Следующий шаг займёт около 20 минут.
                        </p>
                    </div>
                    <div>
                        {/* TODO: Заменить кнопку на ссылку на текущий урок, когда появится маршрут. */}
                        <button className="btn btn-primary" type="button" disabled>
                            Продолжить · JOIN
                        </button>
                        <p className="mt-3 text-xs/4 text-text-tertiary">
                            Твой темп — твой прогресс
                        </p>
                    </div>
                </section>

                {/* TODO: Подставить статистику задач, уроков и дней практики из моков. */}
                <dl aria-label="Учебная статистика" className="grid gap-4 md:grid-cols-3">
                    <Card
                        label="SQL-тренажёр"
                        value="4 / 90"
                        description="Решено 4% · осталось 86 задач"
                    />
                    <Card
                        label="Ликбезы"
                        value="4 / 12"
                        description="Пройдено в курсе «SQL с нуля»"
                    />
                    <Card
                        label="Учебная неделя"
                        value="3 дня"
                        description="С практикой на этой неделе"
                    />
                </dl>

                <div className="grid gap-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
                    <section className="widget p-4.5 pb-8">
                        <h2 className="font-display text-sm/[18px] font-bold">На этой неделе</h2>
                        {/* TODO: Вывести список событий недели из общих моков календаря. */}
                        <ul className="mt-3 grid gap-3">
                            <li className="dashboard-event">
                                <time dateTime="2026-11-19">19 ноя</time>
                                <div>
                                    <p>Разбор задач: JOIN без боли</p>
                                    <p className="mt-1 text-xs/4 text-text-tertiary">20:00 МСК · Онлайн-встреча</p>
                                </div>
                            </li>
                            <li className="dashboard-event">
                                <time dateTime="2026-11-20">20 ноя</time>
                                <div>
                                    <p>Сдать ДЗ · Фильтрация данных</p>
                                    <p className="mt-1 text-xs/4 text-text-tertiary">До 23:59 МСК · Autumn Camp</p>
                                </div>
                            </li>
                            <li className="dashboard-event">
                                <time dateTime="2026-11-21">21 ноя</time>
                                <div>
                                    <p>SQL: 20 минут практики</p>
                                    <p className="mt-1 text-xs/4 text-text-tertiary">Самостоятельная тренировка</p>
                                </div>
                            </li>
                        </ul>
                    </section>

                    <section className="widget p-4.5">
                        <h2 className="font-display text-sm/[18px] font-bold">Время на практику</h2>
                        {/* TODO: Добавить выбор режима, обратный отсчёт и обработчик запуска таймера. */}
                        <div role="group" aria-label="Режим таймера" className="mt-4 flex flex-wrap gap-3 text-xs/4 text-text-secondary">
                            <button type="button" aria-pressed="true" disabled>Фокус 25</button>
                            <button type="button" aria-pressed="false" disabled>Перерыв 5</button>
                            <button type="button" aria-pressed="false" disabled>Фокус 50</button>
                        </div>
                        <p role="timer" aria-label="Оставшееся время" className="my-6 font-mono text-5xl/none tabular-nums">
                            25:00
                        </p>
                        <p className="text-[13px]/5 text-text-tertiary">Одна задача. Без отвлечений.</p>
                        <button className="btn mt-3" type="button" disabled>
                            Начать фокус
                        </button>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Dashboard
