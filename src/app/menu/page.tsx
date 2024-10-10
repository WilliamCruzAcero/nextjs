import { MenuServerComponent } from "@/components/menu/ui/menu-server-component";
import NavbarApp from "@/components/shared/ui/navbar";

export default function menu() {
    return (
        <>
            <NavbarApp />
            <main className="w-full flex min-h-screen flex-col items-center justify-between p-6">
                <MenuServerComponent />
            </main>
        </>
    )
}