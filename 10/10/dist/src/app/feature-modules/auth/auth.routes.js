import { Router } from "express";
import { Route } from "../../routes/routes.types.js";
import { ResponseHandler } from "../../utilities/response-handler.js";
import { body } from "../../utilities/validate.js";
import { ZuserCreate } from "./auth.types.js";
import authService from "./auth.service.js";
const router = Router();
router.post("/register", body(ZuserCreate), async (req, res, next)=>{
    try {
        const result = await authService.register(req.body);
        res.send(new ResponseHandler(result));
    } catch (e) {
        next(e);
    }
});
export default new Route("/auth", router);

//# sourceMappingURL=auth.routes.js.map