import type { Request, Response , NextFunction } from "express"
import type { ZodObject } from "zod"


const check = (type: "body" | "params" | "query") => {
    return (schema: ZodObject) => {
        return (req: Request, res: Response, next: NextFunction) => {
            try{
                req[type] = schema.parse(req[type])
                next()
                
            }catch(e){
                next({statusCode: 400, message: 'BAD REQUEST', errors: e});
            }
        }
    }
}

export const body = check("body");
export const query = check("query");
export const params = check("params");