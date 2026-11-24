import { createFileRoute } from "@tanstack/react-router";
import FeedDetailPage from "../../../pages/FeedDetailPage";

export const Route = createFileRoute('/_app/feed/$feedId')({
    component: FeedDetailPage
})