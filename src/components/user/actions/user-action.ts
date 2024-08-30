'use server';

import { getUserService } from "@/components/shared/services/get-user-service";
import { UserFormSchema } from "../domain/user-form";
import { conectDB } from "@/components/connectDataBase/conect";
import { createUser } from "../service/create-user";

conectDB();

export async function UserAction(formData: unknown) {
    const parseResult = UserFormSchema.safeParse(formData);
    if (!parseResult.success) return { errors: [{ message: 'Invalid form data' }] }

    const { name, lastname, email, password } = parseResult.data;
    
    const user = await getUserService(email);
    if ( user ) return { errors: [{ message: 'User already exists' }] };

    const msg = await createUser(name, lastname, email, password);
    
    return msg
}