import type { GuideCardProps } from "../../types/GuideCard"
import { Link } from "@tanstack/react-router"


const GuideCard = (guideCard: GuideCardProps) => {
   
    return (
        <article className="widget flex h-full min-h-70 min-w-0 flex-col p-4.5 font-sans text-text-primary">
            <header className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[11px]/[14px]">
                <span className="font-mono tracking-[0.08em] text-text-tertiary uppercase">
                    {String(guideCard.order).padStart(2, "0")} / {guideCard.category}
                </span>
            </header>

            <h3 className="mt-3 font-display text-sm/[18px] font-bold">{guideCard.title}</h3>
            <p className="mt-3 text-sm/5.5 text-text-secondary">{guideCard.description}</p>
            <p className="mt-3 text-xs/4 font-semibold text-text-tertiary tabular-nums">
                {guideCard.lessonCount} · {guideCard.duration}
            </p>

            <div className="mt-auto grid gap-2 pt-6">
                <progress className="learning-progress" value={guideCard.completedLessons} />
                <button
                    className="btn btn-primary cursor-pointer motion-safe:transition motion-safe:duration-200"
                    type="button"
                    onClick={guideCard.onOpen}
                >
                    <Link
                        to="/guide/$guideId"
                        params={{
                            guideId: String(guideCard.id)
                        }}
                    >Перейти в ликбез</Link>
                </button>
            </div>
        </article>

    )
}

export default GuideCard
