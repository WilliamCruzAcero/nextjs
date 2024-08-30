'use server';

import { LoginFormSchema } from "../domain/login-from";
import { conectDB } from "../../connectDataBase/conect";
import { createToken, veryfiToken } from "../service/create-token";
import { getUserService } from "@/components/shared/services/get-user-service";
import { matches } from "@/components/user/service/hash-service";
import { sendCookie } from "../service/send-cookie";

conectDB();

export async function loginAction(formData: unknown) {
    const parseResult = LoginFormSchema.safeParse(formData);
    if (!parseResult.success) return { errors: [{ message: 'Invalid form data' }] }

    const { email, password } = parseResult.data;
    const user = await getUserService(email);

    if ( !user || await matches(user.password, password) === false ) return { errors: [{ message: 'Bad credentials' }] };
    
    const token = await createToken({
        id: user.id
    });
    
    sendCookie({
        token,
        expirationInDays: 7,
    });

    return {errors: []};
}