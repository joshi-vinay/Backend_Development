import z, { email } from "zod";


export const ZUser = z.object({
    id: z.string().optional(),
    name: z.string(),
    email: z.email(),
    password: z.email(),
});
export type User = z.infer<typeof ZUser>