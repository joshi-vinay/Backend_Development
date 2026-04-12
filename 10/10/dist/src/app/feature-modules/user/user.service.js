import userRepo from "./user.repo.js";
import { UserResponse } from "./user.response.js";
const create = async (user)=>{
    try {
        await userRepo.create(user);
        return UserResponse.USER_CREATED;
    } catch (e) {
        UserResponse["USER_CREATION_FAILED"];
    }
};
const findOne = (user)=>userRepo.findOne(user);
export default {
    create,
    findOne
};

//# sourceMappingURL=user.service.js.map