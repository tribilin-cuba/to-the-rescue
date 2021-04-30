import TokenModel from "../models/token.js";
import Repository from "../repositories/repository.js";
import Manager from "./manager.js";

class TokenManager extends Manager{
    
    constructor(){
        super(new Repository(TokenModel))
    }

}

export default TokenManager