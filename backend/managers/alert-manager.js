import { AlertModel } from "../models/alert.js";
import Repository from "../repositories/repository.js";
import Manager from "./manager.js";
import randomToken from "random-token";
import moment from "moment";
import path from "path"
import fs from "fs"
import { PICTURES_DIR } from "../config/constant.js";

class AlertManager extends Manager{
    
    constructor(){
        super(new Repository(AlertModel))
    }

    insert(alert) {
        
        if(!alert.imgString)
            return Manager.prototype.insert.call(this, alert)

        const date = moment().format('YYYYMMDD')
        const middle = `${alert.alert_type}-${alert.province}-${alert.municipality}-`
        const random = randomToken(5)
        const extension = '.jpg'

        const picName = date + middle + random + extension

        const picPath = path.join("static","pictures", picName)

        const alertToStore = {
            ...alert,
            picture_path: picPath
        }

        const imageToStore = alert.imgString.split(';base64,').pop()

        fs.writeFileSync(picPath, imageToStore, {encoding: "base64"})
        
        return Manager.prototype.insert.call(this, alertToStore)
    }

}

export default AlertManager