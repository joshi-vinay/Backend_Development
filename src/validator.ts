import type{ User } from "./app/feature-modules/user/user.types.js"



const user = {
    id: "string",
    name: "string"
} 


export const bodyChecker = (user: any, body: any) => {
    for(let key in user){
        if(!(key in body)){
            throw new Error("Key is not present..")
        }

        if(typeof body[key] !== user[key]){
            throw new Error(`Key should be of type ${user[key]}`)
        }
    }

}   






// export const bodyValidator = (body: unknown) => {

//     if(typeof(body) !== typeof(user)) {
//         throw new Error("Invalid input..")  
//     }

// }   

// export const paramsValidator = (id: unknown) => {
//     if(typeof id !== "string") throw new Error("Invalid Id...");

//     const num = Number(id);
//     if(!isFinite(num)) throw new Error("Invalid Id...");
    
    
// }


