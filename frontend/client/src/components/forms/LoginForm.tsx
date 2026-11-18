import { useForm } from "react-hook-form"
import type LoginFormValues from "../../types/auth/LoginFormValues"
import Input from "../UI/Input"

const LoginForm = () => {
    const { register, handleSubmit } = useForm<LoginFormValues>()

    const onLogin = (data: LoginFormValues) => {
        console.log(data)
    }

    return (
        <section className="w-full" aria-labelledby="login-title">
            <form onSubmit={handleSubmit(onLogin)}>
                <div className="space-y-5">
                    <Input
                        label="login"
                        placeholder="Твой логин"
                        type="text"
                        register={register}
                        required
                    />
                    <Input
                        label="password"
                        placeholder="••••••••"
                        type="password"
                        register={register}
                        required
                    />
                </div>

                <button type="submit" className="mt-5 min-h-13 w-full rounded-[13px] bg-accent-lime px-5 text-[15px] font-bold text-bg-primary transition-colors duration-200 hover:bg-[#ffe873] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime motion-reduce:transition-none">
                    Войти
                </button>
            </form>
        </section>
    )
}

export default LoginForm