import mongoose from "mongoose"
import { connection } from "../app.js"
import MongooseConnection from "../config/mongoose.js"

before((done) => {
    var connector = new MongooseConnection()
    connector.getConnection()
    connector.connection.collections.users.drop(() => {
        done()
    })
})

after((done) => {
    mongoose.disconnect(done)
})