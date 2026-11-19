import { useForm } from "react-hook-form"
import type RegisterFormValues from "../../types/auth/RegisterForm"
import Input from "../UI/Input"

const RegisterForm = () => {
    const { register, handleSubmit, formState } = useForm<RegisterFormValues>()

    const onRegister = (data: RegisterFormValues) => {
        console.log(data)
    }

    const loginError = formState.errors['login']?.message
    const emailError = formState.errors['email']?.message
    const codeError = formState.errors['code']?.message
    const passwordError = formState.errors['password']?.message
    const confirmPasswordError = formState.errors['confirmPassword']?.message




    return (
        <form className="w-full" onSubmit={handleSubmit(onRegister)} noValidate>
            <div className="space-y-5">
                <Input
                    label="login"
                    placeholder="Придумай логин"
                    type="text"
                    register={register} 
                    required='Введи свой логин'                   
                />
                {loginError && <p className="form-error">{loginError}</p>}
                <div className="grid items-end gap-3 sm:grid-cols-[minmax(0,1fr)_9.75rem]">
                    <Input
                        label="email"
                        placeholder="Введи свою почту"
                        type="email"
                        register={register}
                        required='Введи свою почту'
                        pattern={{
                            value: /\S+@\S+\.\S+/,
                            message: 'Введенный email неккоректный'
                        }
                        }
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
                {emailError && <p className="form-error">{emailError}</p>}
                <div>
                    <Input
                        label="code"
                        placeholder="0 0 0 0 0 0"
                        type="text"
                        inputMode="numeric"
                        register={register}
                        required='Введи присланный код'
                        pattern={{
                            value: /^\d{6}$/,
                            message: 'Введеный код должен состоять только из 6 цифр'
                        }}
                    />
                    {codeError && <p className="form-error">{codeError}</p>}
                    <p className="mt-2 text-[12px]/4.5 text-text-tertiary">
                        Сначала получи код на указанную почту.
                    </p>
                </div>
                <Input
                    label="password"
                    placeholder="••••••••"
                    type="password"
                    register={register}
                    required='Введи свой пароль'
                />
                {passwordError && <p className="form-error">{passwordError}</p>}
                <Input
                    label="confirmPassword"
                    placeholder="••••••••"
                    type="password"
                    register={register}
                    required='Введи еще раз свой пароль'
                />
                {confirmPasswordError && <p className="form-error">{confirmPasswordError}</p>}
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
