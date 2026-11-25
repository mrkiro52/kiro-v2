import MessageListItem from "../components/UI/MessageListItem"
import { MockMessages } from "../mock/MessageMock"
import type { MessageListItemProps } from "../types/MessageListItem"


const Messages = () => {
    return (
        <>
            <div className="mb-6">
                <h1 className="font-display text-[28px]/[34px] font-bold tracking-[-0.3px]">Сообщения</h1>
                <p className="mt-1 text-[15px]/6 text-text-secondary">Важное от команды, наставников и платформы.</p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,13fr)]">
                {/* TODO: Брать список из моков, выбирать сообщение по id и отмечать его прочитанным при открытии. */}
                <ul className="widget flex flex-col gap-1 p-3" aria-label="Список сообщений">
                    {MockMessages.map((message: MessageListItemProps) => (
                        <MessageListItem
                            {...message}
                        />
                    ))}
                </ul>

                {/* TODO: Подставить данные выбранного сообщения. Плашку встречи и кнопку выводить при наличии встречи. */}
                <article className="widget grid content-start gap-6 p-4.5 md:p-6" aria-labelledby="message-subject">
                    <header>
                        <p className="text-[11px]/[14px] font-semibold text-text-tertiary uppercase">
                            Команда KIRO <span aria-hidden="true">/</span>
                            <time dateTime="2026-11-18T12:30:00+03:00">18 ноября, 12:30 МСК</time>
                        </p>
                        <h2 id="message-subject" className="mt-6 font-display text-[17px]/5.5 font-bold">
                            Завтра разбираем JOIN
                        </h2>
                    </header>

                    <p className="text-[15px]/6 text-text-secondary">
                        Привет! 19 ноября встречаемся на живом разборе SQL-задач.
                        Покажем, как связывать таблицы и не терять строки по дороге.
                    </p>

                    <div className="rounded-radius-md bg-bg-tertiary p-4.5">
                        <time className="font-mono text-[17px]/5.5 tabular-nums" dateTime="2026-11-19T20:00:00+03:00">
                            19 ноября · 20:00 МСК
                        </time>
                        <p className="mt-2 text-[13px]/5 text-text-tertiary">
                            Онлайн · 60 минут · Запись будет в ликбезе
                        </p>
                    </div>

                    <section>
                        <h3 className="font-display text-sm/[18px] font-bold">Что разберём</h3>
                        <ol className="mt-4 list-[decimal-leading-zero] pl-6 text-text-secondary">
                            <li>Чем INNER JOIN отличается от LEFT JOIN</li>
                            <li>Почему появляются дубликаты</li>
                            <li>Твои вопросы и задачи из домашки</li>
                        </ol>
                    </section>

                    <div>
                        <p className="text-text-secondary">Возьми с собой вопросы — решим вместе.</p>
                        {/* TODO: Подставить ссылку на встречу. */}
                        <button className="btn btn-primary mt-4 sm:w-fit sm:px-14" type="button" disabled>
                            Открыть встречу
                        </button>
                    </div>
                    <p className="text-xs/4 text-text-tertiary">Вопросы по доступу: @kiro_team_manager</p>
                </article>
            </div>
        </>
    )
}

export default Messages
