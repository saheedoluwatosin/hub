import { NextFunction,Request,Response } from "express";
import { Userservice } from "../service/user-service";
import { User_reg } from "../dto/user.dto";
import { success } from "../util/response";






export const createnewuser = async(req:Request,res:Response,next:NextFunction)=>{
    const newuser: User_reg = req.body
    const newreg = new Userservice()
    const newreg1 = await newreg.registeruser(newuser)
    return success(res,200,{newreg1},"successfully")
}