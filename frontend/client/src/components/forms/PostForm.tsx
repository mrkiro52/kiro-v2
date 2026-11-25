import Input from "../UI/Input"
import { useForm } from "react-hook-form"
import type PostType from "../../types/PostType"


const PostForm = () => {

    const { register, handleSubmit, formState } = useForm<PostType>()

    const headingError = formState.errors['heading']?.message
    const textError = formState.errors['text']?.message

    const onCreate = (data: PostType) => {
        console.log(data)
    }

    return (
        <section className="widget mb-4 max-w-3xl p-4.5">
            <form onSubmit={handleSubmit(onCreate)} className="mt-4 w-1/2">
                <Input
                    inputName="Заголовок поста"
                    label="heading"
                    placeholder="Придумай заголовок для своего поста"
                    type="text"
                    register={register}
                    required='Введи заголовок поста'
                />
                {headingError && <p className="form-error">{headingError}</p>}
                <Input
                    inputName="Текст поста"
                    label="text"
                    placeholder="Напиши о чем твой пост"
                    type="text"
                    register={register}
                    required='Введи текст поста'
                />
                {textError && <p className="form-error">{textError}</p>}
                <button type="submit" className="btn btn-primary mt-4 sm:w-fit sm:px-14">Опубликовать пост</button>
            </form>
        </section>
    )
}

export default PostForm