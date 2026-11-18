import { useForm } from "react-hook-form"
import type RegisterFormValues from "../../types/auth/RegisterForm"
import Input from "../UI/Input"

const RegisterForm = () => {
    const { register, handleSubmit } = useForm<RegisterFormValues>()

    const onRegister = (data: RegisterFormValues) => {
        console.log(data)
    }

    return (
        <form className="w-full" onSubmit={handleSubmit(onRegister)}>
            <div className="space-y-5">
                <Input
                    label="login"
                    placeholder="Придумай логин"
                    type="text"
                    register={register}
                    required
                />
                <div className="grid items-end gap-3 sm:grid-cols-[minmax(0,1fr)_9.75rem]">
                    <Input
                        label="email"
                        placeholder="Введи свою почту"
                        type="email"
                        register={register}
                        required
                    />
                    <button
                        type="button"
                        className="min-h-13.5 cursor-pointer rounded-full border border-border-color px-4
                            text-[13px] font-semibold text-text-primary transition-colors duration-200
                            hover:border-accent-lime hover:text-accent-lime focus-visible:outline-2
                            focus-visible:outline-offset-2 focus-visible:outline-accent-lime motion-reduce:transition-none"
                    >
                        Получить код
                    </button>
                </div>
                <div>
                    <Input
                        label="code"
                        placeholder="0 0 0 0 0 0"
                        type="text"
                        inputMode="numeric"
                        register={register}
                        required
                    />
                    <p className="mt-2 text-[12px]/4.5 text-text-tertiary">
                        Сначала получи код на указанную почту.
                    </p>
                </div>
                <Input
                    label="password"
                    placeholder="••••••••"
                    type="password"
                    register={register}
                    required
                />
                <Input
                    label="confirmPassword"
                    placeholder="••••••••"
                    type="password"
                    register={register}
                    required
                />
            </div>

            <button
                type="submit"
                className="mt-8 min-h-13 w-full rounded-[13px] bg-accent-lime px-5 text-[15px] font-bold
                    text-bg-primary transition-colors duration-200 hover:bg-[#ffe873] focus-visible:outline-2
                    focus-visible:outline-offset-2 focus-visible:outline-accent-lime motion-reduce:transition-none"
            >
                Зарегистрироваться
            </button>
        </form>
    )
}

export default RegisterForm
