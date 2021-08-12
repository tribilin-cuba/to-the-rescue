import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
class MongooseConnection{

    connection = null

    getConnection(){

        if(this.connection !== null)
            return this.connection

        mongoose.Promise = global.Promise

        const DB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/to-the-rescue-dev"
        console.log(DB_URL)
        
        mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        mongoose.connection
                .once('open', () => {
                    console.log('CONNECTED TO DB');
                })
                .on('error', (error)=> {
                    console.error('CONNECTION ERROR:', error)
                    process.exit(1)
                })
                .on('close', () => console.log('CLOSING CONNECTION'))
                
        this.connection = mongoose.connection
    }
}

export default MongooseConnection