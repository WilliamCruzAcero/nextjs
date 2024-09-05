import { cookies } from "next/headers"

type SendCookieInput = {
    token: string;
    expirationInDays: number;
}

export function sendCookie({ token, expirationInDays }: SendCookieInput) {
    const expiresAt = new Date(Date.now() + expirationInDays * 24 * 60 * 60 * 1000);
    cookies().set('token', token, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    });

    return true;
}

