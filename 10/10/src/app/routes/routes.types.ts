import type { Router } from "express";


export class Route {
    private static registeredRoutes: string[] = [];
    constructor(
        public path: string,
        public router: Router
    ) {
        if(!path.startsWith("/")) throw (`${path} must start with a "/"`);
        if(Route.registeredRoutes.includes(path)) throw (`${path} is already been registered.`);

        Route.registeredRoutes.push(path);
    }
}

export type Routes = Route[]