import { hashPassword } from "../../utilities/hash-password.js";
import userRepo from "./user.repo.js";
import { UserResponse } from "./user.response.js";
import type { User } from "./user.types.js";



const create = async (user: Omit<User, "id">) => {
    try {
        user.password = await hashPassword(user.password)
        await userRepo.create(user);
        return UserResponse.USER_CREATED;
    } catch (error) {
        return UserResponse.USER_CREATION_FAILED;
    }
}

const findOne = (user: Partial<User>) => userRepo.findOne(user);


export default{
    create,
    findOne
}