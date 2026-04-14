import express from "express";
import { env } from "node:process";
import { connectToPG } from "./connections/pg.connection.js";
import { registereMiddlewares } from "./routes/routes.js";
export const startServer = async ()=>{
    const app = express();
    await connectToPG();
    registereMiddlewares(app);
    app.listen(env.PORT, ()=>{
        console.log(`SERVER STARTED AT PORT ${env.PORT}`);
    });
};

//# sourceMappingURL=app.js.map