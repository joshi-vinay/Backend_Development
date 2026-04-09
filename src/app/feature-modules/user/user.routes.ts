import { Router } from "express";
import userService from "./user.service.js";
import { Route } from "../../routes/routes.types.js";
import { ResponseHandler } from "../../../utilities/response-handlers.js";

import { bodyChecker } from "../../../validator.js";

const router = Router();


router.get("/", async (req, res, next) => {
    try{
        const result = await userService.getAllUsers();
        res.send(new ResponseHandler(res));
    }
    catch(err : any){
        next(err)
    }
})
router.get("/:id", async (req, res, next) => {
    try{
        const result = await userService.getOneUser(req.body.id);
        res.send(new ResponseHandler(result));
    }
     catch(err : any){
        next(err)
    }
})

router.post("/", async (req, res, next) => {
    try{
        const result = await userService.createUser(req.body);
        res.send(new ResponseHandler(result));
    }
      catch(err : any){
        next(err);
    }
})

router.put("/", async (req, res, next) => {
    try{
        const result = await userService.updateUser(req.body);
        res.send(new ResponseHandler(result));
    }
      catch(err : any){
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
    try{
        const result = await userService.createUser(req.body.id);
        res.send(new ResponseHandler(result));
    }
     catch(err : any){
        next(err)
    }
})



export default new Route("/user", router);