import { AlertModel } from "../models/alert.js";
import Repository from "../repositories/repository.js";
import Manager from "./manager.js";

class AlertManager extends Manager{
    
    constructor(){
        super(new Repository(AlertModel))
    }

}

export default AlertManager