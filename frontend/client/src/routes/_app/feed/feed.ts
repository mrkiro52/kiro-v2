import { createFileRoute } from "@tanstack/react-router";
import FeedPage from "../../../pages/FeedPage";


export const Route = createFileRoute('/_app/feed/feed')({
    component: FeedPage
})