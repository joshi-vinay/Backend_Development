import userRepo from "./user.repo.js";
import { user_response } from "./user.responses.js";
import type { User } from "./user.types.js";



const getAllUsers = async () => {
    try {
        const users = await userRepo.getAllUsers();
        if (!users) {
              throw user_response.USER_NOT_FOUND
        }
        return users;
    }
    catch (err) {
        throw err;
    }

}
const getOneUser = async (id: string) => {
    try {
        const user = await userRepo.getOneUser(id); 
        if (!user) {
            
            throw user_response.USER_NOT_FOUND
        }
        return user;
    }
    catch (err) {
        throw err;
    }
}
const createUser = async (user: User) => {
    try {
        const userCreated = await userRepo.createUser(user);
        if(!userCreated){
            return user_response.USER_NOT_CREATED
        }
        return user_response.USER_CREATED
    }
    catch (err) {
        throw err;
    }

}

const updateUser = async (myUser: User) => {
    try {
        const user = await userRepo.updateUser(myUser);
        if (!user) {
            throw user_response.USER_NOT_FOUND
        }
        return user_response.USER_UPDATED;
    }
    catch (err) {
        throw err;
    }
}

const deleteUser = async (id: string) => {
    try {
        const user = await userRepo.deleteUser(id);
        if (!user) {
            throw user_response.USER_NOT_DELETED
        }
        return user_response.USER_DELETED;
    }
    catch (err) {
        throw err;
    }
}

export default {
    getAllUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser
}