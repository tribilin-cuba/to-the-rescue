import express from 'express'
import bodyParser from 'body-parser'

import MongooseConnection from './config/mongoose.js'
import AlertManager from './managers/alert-manager.js'
import UserManager from './managers/user-manager.js'

const app = express()

const connector = new MongooseConnection()
connector.getConnection()

const userManager = new UserManager()
const alertManager = new AlertManager()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json'}));

// USERS
app.get('/user/:id', async (req, res) => {

    var id = req.params.id

    const user = (await userManager.find({_id: id}))[0]

    res.json(user)
})

app.post('/user', async (req, res) => {

    var user = req.body

    user = await userManager.insert(user)

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


app.get('/alert/all', async (req, res) => {

    var alerts = await alertManager.find({})

    res.json(alerts)
})

app.get('/alert/:id', async (req, res) => {

    var id = req.params.id
    var alert = (await alertManager.find({_id: id}))[0]

    res.json(alert)
})

app.post('/alert', async (req, res) => {

    var alert = JSON.parse(req.body)

    alert = await alertManager.insert(alert)

    res.json(alert)
})

app.put('/alert/:id', async (req, res) => {

    const body = JSON.parse(req.body)
    const id = req.params.id

    const user = (await alertManager.update({_id: id}, body))[0]

    res.json(user)
})


app.delete('/alert/:id', async (req, res) => {

    const id = req.params.id

    const user = await alertManager.delete({_id: id})

    res.json(user)
})


app.listen(process.env.PORT || 8080)

export default app