import { LoginFormComponent } from "@/components/login/ui/form";

export default function Login() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <LoginFormComponent size="md"/>
        </main>
    );
}
