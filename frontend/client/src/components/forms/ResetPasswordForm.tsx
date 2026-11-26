import Input from "../UI/Input"
import { useForm } from "react-hook-form"
import { type ResetPasswordType } from "../../types/auth/ResetPasswordValues"


const ResetPasswordForm = () => {

    const { register, handleSubmit, formState } = useForm<ResetPasswordType>()


    const passwordError = formState.errors['password']?.message
    const new_password1Error = formState.errors['new_password1']?.message
    const new_password2Error = formState.errors['new_password2']?.message


    const onReset = (data: ResetPasswordType) => {
        console.log(data)
    }

    return (
        <>
            <form className="grid gap-4" onSubmit={handleSubmit(onReset)}>
                <Input
                    inputName="Текущий пароль"
                    label="password"
                    placeholder="Твой текущий пароль"
                    type="password"
                    register={register}
                    required='Введи свой старый пароль'
                />
                {passwordError && <p className="form-error">{passwordError}</p>}
                <Input
                    inputName="Новый пароль"
                    label="new_password1"
                    placeholder="Твой новый пароль"
                    type="password"
                    register={register}
                    required='Введи свой новый пароль'
                />
                {new_password1Error && <p className="form-error">{new_password1Error}</p>}
                <Input
                    inputName="Повтори новый пароль"
                    label="new_password2"
                    placeholder="Повтори свой новый пароль"
                    type="password"
                    register={register}
                    required='Повтори свой новый пароль'
                />
                {new_password2Error && <p className="form-error">{new_password2Error}</p>}
                <button type="submit" className="btn btn-primary cursor-pointer">
                    Сохранить пароль
                </button>
            </form>
        </>
    )
}

export default ResetPasswordForm
