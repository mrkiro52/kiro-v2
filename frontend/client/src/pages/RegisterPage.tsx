import RegisterForm from "../components/forms/RegisterForm"
import { Link } from "@tanstack/react-router"


const RegisterPage = () => {
    return (
        <>
            <header className="mb-8">
                <h1 id="login-title" className="font-display text-[28px] font-bold leading-8.5 tracking-[-0.3px] text-text-primary">
                    Создай аккаунт
                </h1>
                <p className="mt-3 text-[15px] leading-6 text-text-secondary">
                    Твой путь в IT начинается здесь.
                </p>
            </header>
            <RegisterForm />
            <div className="mt-6 space-y-1 text-center text-[13px] leading-5 text-text-tertiary">
                <p>
                    Уже есть аккаунт?
                    <Link
                        to="/login"
                        className="font-semibold text-accent-lime hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
                    >
                        Войти
                    </Link>
                </p>
                <p>
                    По всем вопросам пишите
                    <a
                        href="https://t.me/kiro_team_manager"
                        className="font-semibold text-accent-lime hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
                    >
                        @kiro_team_manager
                    </a>
                </p>
            </div>
        </>
    )
}

export default RegisterPage