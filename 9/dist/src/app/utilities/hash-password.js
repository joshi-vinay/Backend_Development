import { genSalt, hash } from "bcryptjs";
export const hashPassword = async (password)=>{
    try {
        const salt = await genSalt(5);
        const hashedPassword = await hash(password, salt);
        return hashedPassword;
    } catch (error) {
        throw 'could not hash password';
    }
};

//# sourceMappingURL=hash-password.js.map