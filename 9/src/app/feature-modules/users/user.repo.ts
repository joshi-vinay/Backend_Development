import { UserSchema } from "./user.schema.js";
import type { User } from "./user.types.js";


const create = (user: Omit<User, "id">) => UserSchema.create(user);

const findOne = (user: Partial<User>) => UserSchema.findOne({where: user});


export default{
    create,
    findOne
}