import MongooseConnection from "../config/mongoose.js"

before((done) => {
    var connector = new MongooseConnection()
    connector.getConnection()
    connector.connection.collections.users.drop(() => {
        done()
    })
})