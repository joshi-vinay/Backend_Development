import express from "express";
import { connectToPG } from "./connections/postgres.connection.js";
import { registerMiddlewares } from "./routes/routes.js";
import { env } from "../validate-env.js";

export const startServer = async () => {
    try {
        const app = express();
        
        await connectToPG();
        registerMiddlewares(app)
        

        app.listen(
            env.PORT,
            () => console.log(`SERVER STARTED ON PORT ${env.PORT}`)
        )
    } catch(e) {
        console.log(e);
        process.exit(1)  
    }
} 