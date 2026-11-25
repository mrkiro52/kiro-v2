import { useForm } from "react-hook-form"
import Input from "../UI/Input"
import type ReviewType from "../../types/ReviewType"

const ReviewForm = () => {

    const {register, formState} = useForm<ReviewType>()

    const reviewError = formState.errors['review']?.message

    return(
        <>
        <form className="mt-4 border-t border-border-color pt-4 font-sans [&_label]:text-text-secondary [&_input]:text-[15px] [&_input:focus]:bg-bg-secondary [&:has(.form-error)_input]:border-danger">
            <Input
                inputName="Твой комментарий"
                label="review"
                placeholder="Напиши свой комментарий"
                type="text"
                register={register}
                required='Добавь текст чтобы оставить комментарий'
            />
            {reviewError && <p className="form-error">{reviewError}</p>}
            <button type="submit" className="btn btn-ghost mt-3 min-h-11 w-full border-accent-lime/40 px-4 text-accent-lime hover:bg-accent-lime/10 sm:w-fit">
                Оставить комментарий
            </button>
        </form>
        </>
    )
}

export default ReviewForm
