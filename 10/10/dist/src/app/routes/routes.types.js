export class Route {
    path;
    router;
    static registeredRoutes = [];
    constructor(path, router){
        this.path = path;
        this.router = router;
        if (!path.startsWith("/")) throw `${path} must start with a "/"`;
        if (Route.registeredRoutes.includes(path)) throw `${path} is already been registered.`;
        Route.registeredRoutes.push(path);
    }
}

//# sourceMappingURL=routes.types.js.map