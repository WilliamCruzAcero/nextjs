import { z } from "zod";

export const LoginFormSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z.string().min(6)
});

export type LoginForm = z.infer<typeof LoginFormSchema>;
