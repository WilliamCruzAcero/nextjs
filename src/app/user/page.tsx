import { UserFormComponent } from "@/components/user/ui/form";

const size = "md"

export default function User() {
    
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <UserFormComponent size='md'/>
        </main>
    );
}

