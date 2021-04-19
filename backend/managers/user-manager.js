import UserModel from "../models/user.js";
import Repository from "../repositories/repository.js";
import Manager from "./manager.js";

class UserManager extends Manager{
    
    constructor(){
        super(new Repository(UserModel))
    }

}

export default UserManager