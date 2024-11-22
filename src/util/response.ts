import { Response } from "express";




export const success = (res:Response , status:number,entity:any =[] , mssg="" ) => res.status(status||200).json({
    success:true,
    status : status || 200,
    payload : entity || undefined
})


export const notfound= (res:Response,status:number,mssg ="")=> res.status(status||404).json({
        success:false,
        status:status|| 400,
        message : mssg || "Not Found"        	
})


export const error = (res:Response,status:number , mssg ="")=> res.status(status||500).json({
    success: false,
    status: status || 500,
    message: mssg || "Internal server error",
})





