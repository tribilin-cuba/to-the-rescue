import chai from 'chai'
import chaiHttp from 'chai-http'

import app from "../../index.js"

const should = chai.should();


chai.use(chaiHttp)

context('Test the token endpoints of the api', () => {
    const TOKEN = 'qwerty' 

    describe('Basic CRUD endpoints', () => {
        var tokenId = null
        
        it('Should store the token without errors', (done) => {

            chai.request(app)
                .post("/token")
                .send({token: TOKEN})
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.token.should.be.equal(TOKEN)
                    tokenId = res.body._id
                    done()
                })
        })

        it('Should update the token', (done) => {

            chai.request(app)
                .put('/token')
                .send({
                    token: TOKEN,
                    user_id: 'some-random-id'
                })
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.n.should.be.equal(1)
                    res.body.nModified.should.be.equal(1)
                    done()
                })
        })

        it('Should not update unexistent token', (done) => {

            
            chai.request(app)
                .put('/token')
                .send({
                    token: 'UNEXISTENT-TOKEN',
                    user_id: 'user id'
                })
                .end((err, res) => {
                    res.body.nModified.should.be.equal(0)
                    done()
                })
        })
    })

})