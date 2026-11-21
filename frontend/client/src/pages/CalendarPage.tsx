import { useState } from "react"
import Calendar from "react-calendar"
import Card from "../components/UI/Card";



type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const CalendarPage = () => {

    const [value, setValue] = useState<Value>(new Date())

    return (
        <div className="calendar-layout">
            <Calendar
                className="widget kiro-calendar"
                locale="ru-RU"
                onChange={setValue}
                value={value}
                prevLabel="←"
                nextLabel="→"
                prevAriaLabel="Предыдущий период"
                nextAriaLabel="Следующий период"
                prev2AriaLabel="Перейти назад на больший период"
                next2AriaLabel="Перейти вперёд на больший период"
            />

            <div className="calendar-sidebar">
                <div className="widget calendar-day" aria-labelledby="calendar-day-heading" aria-live="polite">
                    <div>
                        <h2 id="calendar-day-heading">
                            Дата
                        </h2>
                        <span>пока нету данных</span>
                    </div>
                </div>

                <div>
                    <h1 className=" text-[28px]/[34px] font-bold mb-5">Дальше по плану</h1>
                    <div className="flex flex-col gap-4">
                        <Card label="Дата - время" value="Задача" description="Описание" />
                        <Card label="Дата - время" value="Задача" description="Описание" />
                        <Card label="Дата - время" value="Задача" description="Описание" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CalendarPage
