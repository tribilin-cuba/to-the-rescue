import mongoose from "mongoose"
import { MONGODB_URL } from "./constant.js"


class MongooseConnection{

    connection = null

    getConnection(){

        if(this.connection !== null)
            return this.connection

        mongoose.Promise = global.Promise

        mongoose.connect(MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        mongoose.connection
                .on('error', (error)=>console.error('CONNECTION ERROR:', error))

        this.connection = mongoose.connection
    }
}

export default MongooseConnection