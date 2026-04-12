import z from "zod";
export const ZUser = z.object({
    id: z.string().optional(),
    name: z.string(),
    email: z.email(),
    password: z.email()
});

//# sourceMappingURL=user.types.js.map