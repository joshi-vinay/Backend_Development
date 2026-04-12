export const UserResponse: Record<"USER_CREATED" | "USER_CREATION_FAILED", {statusCode: number, message: string}> = {

    USER_CREATED:{
        statusCode: 201,
        message: "USER CREATED"
        
    },
    USER_CREATION_FAILED:{
        statusCode: 500,
        message: "USER CREATION FAILED"
        
    }
}
