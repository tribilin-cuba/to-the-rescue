import mongoose from "mongoose"
import { connection } from "../app.js"
import MongooseConnection from "../config/mongoose.js"

var connector = new MongooseConnection()
connector.getConnection()
var conn = connector.connection

before((done) => {
    conn.collections.users.drop(() => {
        done()
    })
})

after((done) => {
    // connection.close(() => {
    //     conn.close(() => {
    //         console.log("CONNECTION CLOSED");
    //         done()
    //     })
    // })

    mongoose.disconnect(done)
})