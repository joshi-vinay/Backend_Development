export const UserResponse: Record<"USER_CREATED" | "USER_CREATION_FAILED" , {statusCode: number,
    message: string}> = {
        USER_CREATED : {
            statusCode: 200,
            message: "User Created Successfully"
        },
        USER_CREATION_FAILED: {
            statusCode: 500,
            message: "User Creation Failed"
        }
    }