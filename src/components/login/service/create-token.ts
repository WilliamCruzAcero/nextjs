import { cookies } from "next/headers"
import jwt from 'jsonwebtoken';
import { User } from '@/components/shared/models/user';

const secret = process.env.SECRET!;

export async function createToken(payload: Pick<User, 'id'>) {
    const token = jwt.sign(payload, secret, { expiresIn: '1h' } );
    return token;
}

export async function veryfiToken() {
    const token = cookies().get('token')?.value

    if ( !token ) return { errors: [{ message: 'No valid token supplied.'}]} 
    const idUser = jwt.verify(token, secret);
   
    return idUser
}