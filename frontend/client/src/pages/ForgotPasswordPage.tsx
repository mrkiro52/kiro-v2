import { Link } from "@tanstack/react-router"
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm"


const ForgotPasswordPage = () => {
    return (
        <div className="forgot-password-card widget w-full p-4.5 font-sans text-text-primary">
            <h1 className="font-display text-[28px]/[34px] font-bold tracking-[-0.3px]">
                Восстановление доступа
            </h1>
            <span className="mt-2 block text-sm/5.5 text-text-secondary">
                Укажи почту, которую использовал при регистрации
            </span>
            <ForgotPasswordForm />
            <Link
                to="/login"
                className="mt-4 inline-flex min-h-8 items-center rounded-radius-sm px-1 text-[13px]/5 font-semibold text-accent-lime hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
            >
                Вернуться ко входу
            </Link>
        </div>
    )
}

export default ForgotPasswordPage
