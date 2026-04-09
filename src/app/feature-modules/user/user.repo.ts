import { UserSchema } from "./user.schema.js";
import type { User } from "./user.types.js";


const getAllUsers = () =>  UserSchema.findAll();

const getOneUser = (id: string) =>  UserSchema.findOne({ where: { id } });

const createUser = (user: User) =>  UserSchema.create(user)

const updateUser = (user: User) =>  UserSchema.update(user, { where: { id: user.id } })

const deleteUser = (id: string) =>  UserSchema.destroy({ where: { id: id }});

export default {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}

