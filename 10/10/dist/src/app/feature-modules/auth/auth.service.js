import userService from "../user/user.service.js";
import { AuthResponse } from "./auth.responses.js";
const register = async (user)=>{
    try {
        const userExists = await userService.findOne({
            email: user.email
        });
        if (userExists) throw AuthResponse.USER_ALREADY_EXISTS;
        return await userService.create(user);
    } catch (e) {
        throw e;
    }
};
export default {
    register
};

//# sourceMappingURL=auth.service.js.map