import helmet from "helmet";
import { routes } from "./routes.data.js";
import { json } from "express";
import { ResponseHandler } from "../utilities/response-handler.js";
export const registereMiddlewares = (app)=>{
    app.use(helmet());
    app.use(json());
    for (const route of routes){
        app.use(route.path, route.router);
    }
    app.use((err, req, res, next)=>{
        console.log(err);
        res.status(err.statusCode).send(new ResponseHandler(null, err));
    });
};

//# sourceMappingURL=routes.js.map