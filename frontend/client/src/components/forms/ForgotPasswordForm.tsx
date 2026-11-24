import Input from "../UI/Input"
import { useForm } from "react-hook-form"

const ForgotPasswordForm = () => {

    const {register} = useForm()


    return(
        <>
        <form className="mt-3 grid gap-3">
            <Input
            inputName="Почта"
            label="email"
            placeholder="Введи свою почту"
            type="email"
            register={register}
            required           
            />
            <button
                type="submit"
                className="btn btn-primary cursor-pointer motion-safe:transition-[background-color,box-shadow,translate] motion-safe:duration-200"
            >
                Отправить ссылку
            </button>
        </form>
        </>
    )
}

export default ForgotPasswordForm
