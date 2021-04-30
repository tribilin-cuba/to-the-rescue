import mongoose from "mongoose"
import MongooseConnection from "../config/mongoose.js"

before((done) => {
    var connector = new MongooseConnection()
    connector.getConnection()

    while(connector.connection == null)
        continue
    
    connector.connection.dropDatabase()
    
    done()
})

after((done) => {
    mongoose.disconnect(done)
})