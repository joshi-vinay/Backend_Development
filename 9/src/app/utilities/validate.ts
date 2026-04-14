import type { Request, Response, NextFunction } from "express"
import type { ZodObject } from "zod"


const check = (type: "body" | "params" | "query") => {
    return (schema: ZodObject) => {
        return (req: Request, res: Response, next: NextFunction) => {
            try {
                req[type] = schema.parse(req[type])  // validation & sanitazation at the same time.
                next()
            } catch (error) {
                next({statusCode: 400, message: 'BAD REQUEST', errors: error})
            }
        }
    }
}

export const body = check("body");
export const params = check("params");
export const query = check("query");