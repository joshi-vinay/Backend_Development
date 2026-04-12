import z from "zod";

const envSchema = z.object({
    PORT: z.coerce.number("PORT MUST BE A NUMERIC VALUE"),
    DB_NAME: z.string(),
    DB_USERNAME: z.string(),
    DB_PASSWORD: z.string(),
});

console.log("exporting env");

export const env = envSchema.parse(process.env);
