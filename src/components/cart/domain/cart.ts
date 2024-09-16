import { z } from 'zod';

export const CartFormSchema = z.object({
    id: z
        .string()
        .optional(),
    idProd: z
        .string(),
    amount: z
        .number(),
});

export type CartForm = z.infer<typeof CartFormSchema>;