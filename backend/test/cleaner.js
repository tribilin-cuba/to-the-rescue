import mongoose from "mongoose"
import MongooseConnection from "../config/mongoose.js"

before((done) => {
    var connector = new MongooseConnection()
    connector.getConnection()

    while(connector.connection == null)
        continue
        
    if (connector.connection.collections.users)
        connector.connection.collections.users.drop(() => { done() })
    else
        done()
})

after((done) => {
    mongoose.disconnect(done)
})