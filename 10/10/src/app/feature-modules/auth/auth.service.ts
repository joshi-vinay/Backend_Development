import userService from "../user/user.service.js";
import type { User } from "../user/user.types.js";
import { AuthResponse } from "./auth.responses.js";


const register = async(user: Omit<User, "id">) => {
try {
    const userExists = await userService.findOne({email: user.email})
    if(userExists) throw AuthResponse.USER_ALREADY_EXISTS;

    return await userService.create(user)
} catch (e) {
    throw e;
}
}


export default {
    register
}