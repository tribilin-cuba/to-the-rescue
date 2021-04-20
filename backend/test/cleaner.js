import MongooseConnection from "../config/mongoose.js"

var connection = null

before((done) => {
    var connector = new MongooseConnection()
    connector.getConnection()
    connection = connector.connection
    connector.connection.collections.users.drop(() => {
        done()
    })
})

after((done) => {
    process.exit(0)
    done()
})