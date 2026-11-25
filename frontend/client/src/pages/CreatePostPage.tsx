import { Link } from "@tanstack/react-router"
import PostForm from "../components/forms/PostForm"

const CreatePostPage = () => {
    return(
        <>
        <h1 className="font-display text-[28px]/[34px] font-bold tracking-[-0.3px]">Новый пост</h1>
        <Link to="/feed/feed" className="mt-4 inline-flex min-h-8 items-center rounded-radius-sm px-1 text-[15px]/5 font-bold text-accent-lime hover:text-accent-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-lime">К ленте</Link>
        <PostForm/>
        </>
    )
}

export default CreatePostPage