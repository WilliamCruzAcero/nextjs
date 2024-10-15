import { MenuServerComponent } from "@/components/menu/ui/menu-server-component";
import NavbarApp from "@/components/shared/ui/navbar";

export default function menu() {
    return (
        <main >
            <NavbarApp />
            <MenuServerComponent />
        </main>
    );
}