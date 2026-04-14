import helmet from "helmet";
import { routes } from "./routes.data.js"
import { json, type Application, type NextFunction, type Request, type Response } from "express";
import { ResponseHandler } from "../utilities/response-handler.js";


export const registereMiddlewares = (app: Application) => {
        app.use(helmet());
        app.use(json());
        for(const route of routes){
            app.use(route.path, route.router);
        }

        app.use((err : any, req : Request, res : Response, next : NextFunction) => {
            console.log(err);
        res.status(err.statusCode).send(new ResponseHandler(null, err))
    })

}