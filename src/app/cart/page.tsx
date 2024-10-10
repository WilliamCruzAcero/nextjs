import { CartServerComponent } from "@/components/cart/ui/cart-server-component";
import NavbarApp from "@/components/shared/ui/navbar";

export default function Cart() {
    return (
        <>
            <NavbarApp />
            <main className="flex min-h-screen flex-col items-center justify-between p-6">
                <CartServerComponent />
            </main>
        </>
    );
}