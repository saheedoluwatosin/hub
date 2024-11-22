import { Router } from "express";
import { Route } from "../util/route";
import { createnewuser } from "../controller/user-control";







export class UserRoute extends Route{
    name:string = 'users'

    initRoutes(): Router {
        this.router
        .post("/createuser",createnewuser)

        return this.router
    }

    
}