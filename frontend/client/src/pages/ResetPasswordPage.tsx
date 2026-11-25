import ResetPasswordForm from "../components/forms/ResetPasswordForm"
import { Link } from "@tanstack/react-router"



const ResetPasswordPage = () => {
    return(
        <>
        <h1 className="font-display text-[28px]/[34px] font-bold tracking-[-0.3px]">Изменение пароля</h1>
        <p className="mt-1 mb-6 text-[15px]/6 text-text-secondary">
            Обнови свой пароль, чтобы защитить свой аккаунт и сохранить доступ к платформе
        </p>
        <Link to="/profile" className="mt-4 inline-flex min-h-8 items-center rounded-radius-sm px-1 text-[15px]/5 font-bold text-accent-lime hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime">Вернуться в профиль</Link>
        <div className="widget w-1/2 p-4.5">
            <h1 className="font-display text-[17px]/5.5 font-bold">Смена пароля</h1>
            <p className="mt-1 mb-4 text-text-secondary">
                Используй надеждый пароль, который не совпадает с предыдущим
            </p>
            <ResetPasswordForm />
        </div>
        </>
    )
}

export default ResetPasswordPage
