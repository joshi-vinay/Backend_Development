import { UserSchema } from "./user.schema.js";
const create = (user)=>UserSchema.create(user);
const findOne = (user)=>UserSchema.findOne({
        where: user
    });
export default {
    create,
    findOne
};

//# sourceMappingURL=user.repo.js.map