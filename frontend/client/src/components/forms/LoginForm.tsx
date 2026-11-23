import { useForm } from "react-hook-form"
import type LoginFormValues from "../../types/auth/LoginFormValues"
import Input from "../UI/Input"

const LoginForm = () => {
    const { register, handleSubmit, formState} = useForm<LoginFormValues>()

    const onLogin = (data: LoginFormValues) => {
        console.log(data)
    }


    const loginError = formState.errors['login']?.message
    const passwordError = formState.errors['password']?.message

    return (
        <section className="w-full" aria-labelledby="login-title">
            <form onSubmit={handleSubmit(onLogin)}>
                <div className="space-y-5">
                    <Input
                        label="login"
                        placeholder="Твой логин"
                        type="text"
                        register={register}
                        required='Введи свой логин'
                    />
                    {loginError && <p className="form-error">{loginError}</p>}
                    <Input
                        label="password"
                        placeholder="••••••••"
                        type="password"
                        register={register}
                        required='Введи свой пароль'
                    />
                    {passwordError && <p className="form-error">{passwordError}</p>}
                </div>

                <button type="submit" className="mt-5 min-h-13 w-full rounded-radius-md bg-accent-lime px-5 text-[15px] font-bold text-bg-primary transition-colors duration-200 hover:bg-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime motion-reduce:transition-none">
                    Войти
                </button>
            </form>
        </section>
    )
}

export default LoginForm
