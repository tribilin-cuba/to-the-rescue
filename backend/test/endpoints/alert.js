import chai from 'chai'
import chaiHttp from 'chai-http'

import app from "../../app.js"
import { dummyAlert } from '../data/data.js';

const should = chai.should();


chai.use(chaiHttp)

context('Test the alert endpoints of the api', () => {

    describe('Basic CRUD endpoints', () => {
        var alertId = null
        
        it('Should store the alert without errors', (done) => {

            chai.request(app)
                .post("/alert")
                .send(dummyAlert)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.author_id.should.be.equal(dummyAlert.author_id)
                    alertId = res.body._id
                    done()
                })
        })

        it('Should retrieve the alert', (done) => {

            chai.request(app)
                .get('/alert/' + alertId)
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.municipality.should.be.equal(dummyAlert.municipality)
                    done()
                })
        })

        it('Should update the alert', (done) => {

            chai.request(app)
                .put('/alert/' + alertId)
                .send({
                    alert_type: 'Abandonado'
                })
                .end(() => {
                    chai.request(app)
                        .get('/alert/' + alertId)
                        .end((err, res) => {
                            res.should.have.status(200)
                            res.body.should.be.a('object')
                            res.body.alert_type.should.be.equal('Abandonado')
                            done()
                    })
                })
        })

        it('Should delete the alert', (done) => {

            
            chai.request(app)
                .delete('/alert/' + alertId)
                .end(() => {
                    chai.request(app)
                        .get('/alert/' + alertId)
                        .end((err, res) => {
                            res.should.have.status(200)
                            res.body.should.be.a('string')
                            res.body.length.should.be.equal(0)
                            done()
                        })
                })
        })
    })

})