import { z } from "zod";

export const UserFormSchema = z.object({
    id: z
        .string()
        .optional(),
    name: z
        .string()
        .min(2, {message: 'Name must be at least 2 characters long.'}),
    lastname: z
        .string()
        .min(2, {message: 'Lastname must be at least 2 characters long.' }),
    email: z
        .string()
        .email({ message: 'Please enter a valid email.' })
        .trim(),
    password: z
        .string()
        .min(6,'Be at least 6 characters long.' )
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.'}),
    
    active: z
        .boolean()
        .default(true),
    role: z
        .string(),

}); 

export type UserForm = z.infer<typeof UserFormSchema>; 