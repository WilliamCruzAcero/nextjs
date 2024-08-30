'use client';

import { SubmitButton } from "@/components/shared/ui/submit-button";

export function ChatPrincipal() {
    return (
        <div className="w-2/5 min-w-80 flex flex-col gap-4 items-center"
        >
            <div>
                <h1>Chat pricipal</h1>
                <hr />
                <p>HOLA CHAT</p>

            </div>
            <form>
                <SubmitButton label="Logout" color="danger"/>
            </form>
        </div>
    )
}