import type { Router } from "express";


export class Route {
    private static registeredRoutes: string[] = [];
    constructor(
        public path: string,
        public router: Router
    ) {
        if(Route.registeredRoutes.includes(path)) throw new Error(`${path} is already registered.`);
        if(!path.startsWith("/")) throw new Error(`${path} must start with a "/"`);

        Route.registeredRoutes.push(path);
    }
}

export type Routes = Route[]