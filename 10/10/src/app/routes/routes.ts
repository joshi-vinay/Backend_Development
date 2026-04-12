import { json, type Application, type NextFunction, type Request, type Response } from "express";
import helmet from "helmet";
import { ResponseHandler } from "../utilities/response-handler.js";
import { routes } from "./routes.data.js";




export const registerMiddlewares = (app: Application) => {
    app.use(helmet());
    app.use(json());

    for(const route of routes) {
        app.use(route.path, route.router)
    }

    app.use((err : any, req : Request, res : Response, next : NextFunction) => {
        res.status(err.statusCode).send(new ResponseHandler(null, err))
    })
}