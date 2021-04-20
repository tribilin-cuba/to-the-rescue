import chai from 'chai'
import chaiHttp from 'chai-http'

import app, { connection } from "../../app.js"
import { dummyUser } from "../data/data.js";

const should = chai.should();


chai.use(chaiHttp)

context('Test the user endpoints of the api', () => {

    describe('Basic CRUD endpoints', () => {
        var userId = null
        
        it('Should store the user without errors', (done) => {

            chai.request(app)
                .post("/user")
                .send(dummyUser)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.firstName.should.be.equal(dummyUser.firstName)
                    userId = res.body._id
                    done()
                })
        })

        it('Should retrieve the user', (done) => {

            chai.request(app)
                .get('/user/' + userId)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.firstName.should.be.equal(dummyUser.firstName)
                    done()
                })
        })

        it('Should update the user', (done) => {

            chai.request(app)
                .put('/user/' + userId)
                .send({
                    lastName: 'Wall'
                })
                .end(() => {
                    chai.request(app)
                        .get('/user/' + userId)
                        .end((err, res) => {
                            res.should.have.status(200)
                            res.body.should.be.a('object')
                            res.body.lastName.should.be.equal('Wall')
                            done()
                    })
                })
        })

        it('Should delete the user', (done) => {

            
            chai.request(app)
                .delete('/user/' + userId)
                .end(() => {
                    chai.request(app)
                        .get('/user/' + userId)
                        .end((err, res) => {
                            res.should.have.status(200)
                            res.body.should.be.a('string')
                            res.body.length.should.be.equal(0)
                            connection.close()
                            done()
                        })
                })
        })
    })

})