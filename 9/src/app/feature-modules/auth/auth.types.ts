import { ZUser } from "../users/user.types.js";


export const ZUserCreate = ZUser.omit({id:true});

export const ZUserLogin = ZUser.pick({email: true, password: true})