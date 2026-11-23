import Input from "../UI/Input"
import { useForm } from "react-hook-form"



const ResetPasswordForm = () => {

    const { register } = useForm()



    return (
        <>
            <form className="grid gap-4">
                <Input
                    inputName="Текущий пароль"
                    label="password"
                    placeholder="Твой текущий пароль"
                    type="password"
                    register={register}
                    required
                />
                <Input
                    inputName="Новый пароль"
                    label="password"
                    placeholder="Твой новый пароль"
                    type="password"
                    register={register}
                    required
                />
                <Input
                    inputName="Повтори новый пароль"
                    label="password"
                    placeholder="Повтори свой новый пароль"
                    type="password"
                    register={register}
                    required
                />
                <button type="submit" className="btn btn-primary cursor-pointer">
                    Сохранить пароль
                </button>
            </form>
        </>
    )
}

export default ResetPasswordForm
