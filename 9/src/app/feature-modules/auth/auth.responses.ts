export const AuthResponse: Record<"USER_ALREADY_EXISTS" | "INVALID_CREDENTIALS",{statusCode: number, message: string}> = {
    USER_ALREADY_EXISTS:{
        statusCode: 400,
        message:"USER ALREADY EXISTS"
    },
    INVALID_CREDENTIALS:{
        statusCode: 404,
        message:"INVALID CREDENTIALS"
    }
}