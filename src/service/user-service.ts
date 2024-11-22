import { User_reg } from "../dto/user.dto";
import { UserRepository } from "../repository/user-repo";






export class Userservice{
    private userRepository:UserRepository;

    constructor(){
        this.userRepository = new UserRepository()
    }

    async registeruser(user:User_reg){
        const newreg = this.userRepository.create(user)
        return newreg
    }
}








