import express from "express";
import { connectToPG } from "./connections/pg.connection.js";
import { registerMiddlewares } from "./routes/routes.js";
import { env } from "process";
export const startServer = async ()=>{
    try {
        const app = express();
        await connectToPG();
        registerMiddlewares(app);
        app.listen(env.PORT, ()=>console.log(`SERVER STARTED ON PORT ${env.PORT}`));
    } catch (e) {
        console.log(e);
        process.nextTick(()=>process.exit(1));
    }
};

//# sourceMappingURL=app.js.map