import { z } from "zod";

export const UserFormSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1),
    lastname: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    active: z.boolean().default(true)
}); 

export type UserForm = z.infer<typeof UserFormSchema>;