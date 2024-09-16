'use server';

import { cookies } from "next/headers"

export async function DeleteSession() {
    cookies().delete('token');    
}