import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import serveStatic from 'serve-static'

import MongooseConnection from './config/mongoose.js'
import AlertManager from './managers/alert-manager.js'
import UserManager from './managers/user-manager.js'
import TokenManager from './managers/token-manager.js'


const app = express()

app.use(cors({origin: 'http://localhost:3000'}))

app.use("/static/pictures", serveStatic("/static/pictures"))

const connector = new MongooseConnection()
connector.getConnection()

while(connector.connection == null)
    continue

export const connection = connector.connection

const userManager = new UserManager()
const alertManager = new AlertManager()
const tokenManager = new TokenManager()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));


app.get("/", (req, res) => {

    res.send('BIENVENIDO A LA API DE AL RESCATE')
})

// * USERS
app.get('/user/:id', async (req, res) => {

    var id = req.params.id

    const users = await userManager.find({ _id: id })

    const user = users.length > 0 ? users[0] : null
    
    res.json(user)
})

app.post('/user', async (req, res) => {

    const body = req.body

    const user = await userManager.insert(body)

    if(body.token)
        await tokenManager.insert({
            token: body.token,
            user_id: user['_id']
        })

    res.json(user)
})

app.put('/user/:id', async (req, res) => {

    const body = req.body
    const id = req.params.id

    const user = (await userManager.update({_id: id}, body))[0]

    res.json(user)
})

app.delete('/user/:id', async (req, res) => {

    const id = req.params.id

    const user = await userManager.delete({_id: id})

    res.json(user)
})



// * ALERTS
app.get('/alert/all', async (req, res) => {

    var alerts = await alertManager.find({})

    res.json(alerts)
})

app.get('/alert/:id', async (req, res) => {

    var id = req.params.id
    var alert = (await alertManager.find({_id: id}))[0]

    res.json(alert)
})

app.get('/alert-by-user/:id', async (req, res) => {

    const id = req.params.id
    const alerts = await alertManager.find({author_id: id})

    res.json(alerts)
})

app.post('/alert', async (req, res) => {

    var alert = req.body

    alert = await alertManager.insert(alert)

    res.json(alert)
})

app.put('/alert/:id', async (req, res) => {

    const body = req.body
    const id = req.params.id

    const user = (await alertManager.update({_id: id}, body))[0]

    res.json(user)
})


app.delete('/alert/:id', async (req, res) => {

    const id = req.params.id

    const user = await alertManager.delete({_id: id})

    res.json(user)
})

app.delete('/alert', async (req, res) => {

    const filter = req.body

    const user = await alertManager.delete(filter)

    res.json(user)
})

// * TOKENS

app.post('/token', async (req, res) => {

    const body = req.body

    const token = await tokenManager.insert(body)

    res.json(token)
})

app.put('/token', async (req, res) => {

    const body = req.body
    
    const token = (await tokenManager.update({token: body.token},
                                                {user_id: body.user_id}))
    res.json(token)
})

console.log('PORT:', process.env.PORT);

app.listen(process.env.PORT || 8080)

export default app