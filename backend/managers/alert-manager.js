import { AlertModel } from "../models/alert.js";
import Repository from "../repositories/repository.js";
import Manager from "./manager.js";
import randomToken from "random-token";
import moment from "moment";
import detaPackage from "deta";
const { Deta } = detaPackage;
import { TOY_DETA_KEY } from "../config/constant.js";

class AlertManager extends Manager{
    
    constructor(){
        super(new Repository(AlertModel))
    }

    async insert(alert) {
        
        if(!alert.imgString)
            return Manager.prototype.insert.call(this, alert)

        const date = moment().format('YYYYMMDD')
        const middle = `${alert.alert_type}-${alert.province}-${alert.municipality}-`
        const random = randomToken(5)
        const extension = '.jpg'

        const picName = date + middle + random + extension

        const alertToStore = {
            ...alert,
            picture_path: picName
        }

        const imageToStore = alert.imgString.split(';base64,').pop()

        const deta = Deta(process.env.DETA_KEY || TOY_DETA_KEY)

        const photos = deta.Drive(process.env.PHOTOS_DRIVE_NAME || 'photos')

        await photos.put(picName, { data: imageToStore })
        
        
        return Manager.prototype.insert.call(this, alertToStore)
    }

}

export default AlertManager