import { Router } from "express";






export abstract class Route{
      readonly router:Router


    abstract initRoutes():Router;

    constructor(){
        this.router = Router()
    }
}