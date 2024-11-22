import { User_reg } from "../dto/user.dto";
import { prisma } from "../util/db";








export class UserRepository{
     async create(data:User_reg){
        const reguser = await prisma.User.create({
            data:{
                ...data
            }
        })
        return reguser
     }

}