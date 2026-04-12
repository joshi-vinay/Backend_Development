import { json } from "express";
import helmet from "helmet";
import { ResponseHandler } from "../utilities/response-handler.js";
import { routes } from "./routes.data.js";
export const registerMiddlewares = (app)=>{
    app.use(helmet());
    app.use(json());
    for (const route of routes){
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next)=>{
        res.status(err.statusCode).send(new ResponseHandler(null, err));
    });
};

//# sourceMappingURL=routes.js.map