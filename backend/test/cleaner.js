import mongoose from "mongoose"
import MongooseConnection from "../config/mongoose.js"

before((done) => {
    var connector = new MongooseConnection()
    connector.getConnection()

    while(connector.connection == null)
        continue
        
    if (connector.connection.collections.users)
        connector.connection.collections.users.drop(() => {
            if (connector.connection.collections.alerts)
                connector.connection.collections.alerts.drop(() => {
                    if (connector.connection.collections.tokens)
                        connector.connection.collections.tokens.drop(done)
                    else
                        done()
            })
            else
                done()
        })
    else
        done()
})

after((done) => {
    mongoose.disconnect(done)
})