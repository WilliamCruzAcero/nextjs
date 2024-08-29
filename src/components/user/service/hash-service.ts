import crypto from 'node:crypto';
import { promisify } from 'node:util';

const scrypt = promisify<crypto.BinaryLike, crypto.BinaryLike, number, Buffer>(crypto.scrypt);

export async function hash(data: string) {
    const salt = crypto.randomBytes(16).toString('hex');
    const derivedKey = await scrypt(data, salt, 64)
    return salt + ':' + (derivedKey).toString('hex')
}

export async function matches(hash: string, password: string) {
    const [salt, key] = hash.split(':');
    const keyBuffer = Buffer.from(key, 'hex');
    const derivedKey = await scrypt(password, salt, 64);
    return crypto.timingSafeEqual(keyBuffer, derivedKey);
}