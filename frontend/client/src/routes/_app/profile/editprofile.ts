import { createFileRoute } from "@tanstack/react-router";
import EditProfilePage from "../../../pages/EditProfilePage";


export const Route = createFileRoute('/_app/profile/editprofile')({
    component: EditProfilePage
})