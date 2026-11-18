import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";


const RootLayout = () => (
    <>
    <div className="flex gap-2">
        <Outlet/>
        <TanStackRouterDevtools/>
    </div>
    </>
)

export const Route = createRootRoute({component: RootLayout})