import { type DashboardCardProps } from "../../types/DashboardCard"


const StatCard = ({ label, value, description }: DashboardCardProps) => {
    return (
        <div className="widget p-4.5">
            <dt className="text-[13px]/5 font-medium text-text-secondary">{label}</dt>
            <dd className="mt-2 font-display text-[28px]/[34px] font-bold tabular-nums">{value}</dd>
            <dd className="mt-3 text-xs/4 text-text-tertiary">{description}</dd>
        </div>
    )
}

export default StatCard
