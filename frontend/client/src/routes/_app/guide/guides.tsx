import { createFileRoute } from "@tanstack/react-router";
import GuidePage from "../../../pages/GuidePage";


export const Route = createFileRoute('/_app/guide/guides')({
  component: GuidePage
})
