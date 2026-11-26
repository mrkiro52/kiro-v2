import ProfileForm from "../components/forms/ProfileForm"
import { Link } from "@tanstack/react-router"


const EditProfilePage = () => {
    return(
        <>
        <section className="widget mb-4 max-w-3xl p-4.5">
                <h1 className="font-display text-[17px]/5.5 font-bold">Личные данные</h1>
                <p className="mt-1 text-text-secondary">Так тебя увидят наставники и пользователи платформы</p>
                <ProfileForm />
            </section>
            <section className="widget max-w-3xl p-4.5">
                <h1 className="font-display text-[17px]/5.5 font-bold">Безопасность</h1>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-radius-sm bg-bg-tertiary p-3">
                    <div>
                        <h2 className="font-display text-sm/[18px] font-bold">Пароль для входа</h2>
                        <p className="mt-1 text-[13px]/5 text-text-secondary">Не передавай его другим участинкам</p>
                    </div>
                    <Link
                        to="/resetpassword"
                        className="inline-flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime"
                    >
                        <button className="btn btn-ghost">
                            Изменить пароль
                        </button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default EditProfilePage