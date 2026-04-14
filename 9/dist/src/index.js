import { config } from "dotenv";
config();
const appModule = await import("./app/app.js");
appModule.startServer();

//# sourceMappingURL=index.js.map