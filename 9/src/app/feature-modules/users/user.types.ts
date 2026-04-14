
import z from "zod";


export const ZUser = z.object({
    id: z.string().optional(),
    name: z.string(),
    email: z.email(),
    password: z.string().min(5).max(12)
});

export type User = z.infer<typeof ZUser>;


