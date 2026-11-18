import LoginForm from "../components/forms/LoginForm"
import { Link } from "@tanstack/react-router"


const LoginPage = () => {
    return (
        <>
            <header className="mb-8">
                <h1 id="login-title" className="font-display text-[28px] font-bold leading-8.5 tracking-[-0.3px] text-text-primary">
                    С возвращением
                </h1>
                <p className="mt-3 text-[15px] leading-6 text-text-secondary">
                    Войди, чтобы продолжить обучение.
                </p>
            </header>
            <LoginForm />
            <div className="mt-6 space-y-1 text-center text-[13px] leading-5 text-text-tertiary">
                <p>
                    Ещё нет аккаунта?
                    <Link
                        to="/register"
                        className="font-semibold text-accent-lime hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
                    >
                        Зарегистрироваться
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

export default LoginPage