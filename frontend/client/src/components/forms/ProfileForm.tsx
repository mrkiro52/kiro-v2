import Input from "../UI/Input"
import { useForm } from "react-hook-form"

const ProfileForm = () => {

    const { register } = useForm()

    return (
        <>
            <form className="mt-4 w-full" noValidate>
                <div className="grid grid-cols-1 gap-4 [&_label]:mb-1.5 &_label]:tracking-wider [&_label]:text-text-secondary">
                    <Input
                        inputName="Имя"
                        label="name"
                        placeholder="Твое имя"
                        type="text"
                        value="Ханиль"
                        register={register}
                        required='Введи свой логин'
                    />
                    <Input
                        inputName="Фамилия"
                        label="surname"
                        placeholder="Твоя фамилия"
                        type="text"
                        value="Киреев"
                        register={register}
                        required='Введи свой логин'
                    />
                    <Input
                        inputName="Логин"
                        label="login"
                        placeholder="Придумай логин"
                        type="text"
                        value="khanil"
                        register={register}
                        required='Введи свой логин'
                    />
                    <Input
                        inputName="Почта"
                        label="email"
                        placeholder="Введи свою почту"
                        type="email"
                        value="khanil@yandex.ru"
                        register={register}
                        required='Введи свою почту'
                        pattern={{
                            value: /\S+@\S+\.\S+/,
                            message: 'Введенный email неккоректный'
                        }
                        }
                    />
                </div>

                    <button
                        type="submit"
                        className="btn btn-primary mt-6 cursor-pointer px-6 py-3 sm:w-auto
                    motion-safe:transition-[background-color,box-shadow,translate] motion-safe:duration-200"
                    >
                        Сохранить изменения
                    </button>
            </form>
        </>
    )
}

export default ProfileForm
