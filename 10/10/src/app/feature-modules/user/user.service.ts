
import userRepo from "./user.repo.js";
import { UserResponse } from "./user.response.js";
import type { User } from "./user.types.js";

const create = async(user: Omit<User, "id">) => {
    try {
        await userRepo.create(user);
        return UserResponse.USER_CREATED;
    } catch (e) {
        UserResponse["USER_CREATION_FAILED"]
    }
}

const findOne = (user: Partial<User>) => userRepo.findOne(user)

export default{
    create,
    findOne
}