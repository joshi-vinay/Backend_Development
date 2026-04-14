import z, { email } from "zod";

const envSchema = z.object({
    PORT:z.coerce.number(),
    DB_NAME:z.string(),
    DB_USERNAME:z.string(),
    DB_PASSWORD:z.string(),
    JWT_SECRET_KEY:z.string()
})

export const env = envSchema.parse(process.env);