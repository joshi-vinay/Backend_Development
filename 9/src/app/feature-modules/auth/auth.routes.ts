import { ZUserCreate, ZUserLogin } from "./auth.types.js";
import authService from "./auth.service.js";
import { body } from "../../utilities/validate.js";
import { ResponseHandler } from "../../utilities/response-handler.js";
import { Route } from "../../routes/routes.types.js";
import { Router } from "express";



const router = Router();

router.post("/register", body(ZUserCreate), async(req, res, next) => {
    try {
        const result = await authService.register(req.body);
        res.send(new ResponseHandler(result));
    } catch (error) {
        console.error(error);
        
        next(error)
    }
})


router.post("/login", body(ZUserLogin), async(req, res, next) => {
    try{
        const result = await authService.login(req.body);
        res.send(new ResponseHandler(result));
    }
    catch(e){
        console.log(e);
        next(e);
    }
})


export default new Route("/auth", router);