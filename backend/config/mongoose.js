import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()
class MongooseConnection{

    connection = null

    getConnection(){

        if(this.connection !== null)
            return this.connection

        mongoose.Promise = global.Promise

        const DB_URL = "mongodb+srv://co-founder:RingoTribi1002@to-the-rescue-cluster.8gyom.mongodb.net/staging?retryWrites=true&w=majority"
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