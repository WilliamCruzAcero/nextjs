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

    if ( !user || !matches(user.password, password) ) return { errors: [{ message: 'Bad credentials' }] };
    
    const token = await createToken({
        id: user.id
    });

    sendCookie({
        token,
        expirationInDays: 7,
    });

    

    return {errors: []};
}

// // 5. Redirect to /login if the user is not authenticated
// if (isProtectedRoute && !session?.userId) {
//     return NextResponse.redirect(new URL('/login', req.nextUrl))
//   }
 
//   // 6. Redirect to /dashboard if the user is authenticated
//   if (
//     isPublicRoute &&
//     session?.userId &&
//     !req.nextUrl.pathname.startsWith('/dashboard')
//   ) {
//     return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
//   }