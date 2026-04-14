import { compare } from "bcryptjs";
import userService from "../users/user.service.js";
import type{ User } from "../users/user.types.js";
import { AuthResponse } from "./auth.responses.js";
import jwt from "jsonwebtoken"
import { env } from "../../validate-env.js";




const register = async(user: Omit<User, "id">)=>{
    try {
        const userExists = await userService.findOne({email: user.email})
        if(userExists) throw AuthResponse.USER_ALREADY_EXISTS;
        
        return await userService.create(user)
        
    } catch (error) {
        throw error
    }
}

const login = async (credentials: Pick<User, "email" | "password">) => {
    try {
        const user = await userService.findOne({email: credentials.email});
        if(!user) {
            console.log("kech");
            throw AuthResponse.INVALID_CREDENTIALS;
        }

        const isPasswordValid = compare(credentials.email, user.email);   
        if(!isPasswordValid) throw AuthResponse.INVALID_CREDENTIALS;

        const token = jwt.sign(
            {email: credentials.email},
            env.JWT_SECRET_KEY,
            {
                expiresIn: "10m",
                issuer: "user",
                algorithm: "HS256"
            }
        )      

        const {password, ...userWithoutPassword} = user.toJSON();
        // return userWithoutPassword;
        return {...userWithoutPassword, token};

    } catch (error) {
        throw error
    }
}

export default{
    register,
    login
}