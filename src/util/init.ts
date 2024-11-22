import { UserRoute } from "../route/user-route";
import { Route } from "./route";



const apiVersion = "/api/v1";


const routes :Record<string,Route> = {
    user: new UserRoute()
};


export const inituserRoutes = (app:any)=>{
    Object.entries(routes).forEach(([url,route])=>{
        app.use(`${apiVersion}/${url}`,route.initRoutes())
    })
}
