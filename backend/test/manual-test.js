// import chai from 'chai'
// import chaiHttp from 'chai-http'

// import app from "../app.js"
// import { dummyUser } from "./data/data.js";

// const should = chai.should();


// chai.use(chaiHttp)


// chai.request(app)
//     .post("/user")
//     .send(dummyUser)
//     .end((err, res) => {
//         res.should.have.status(200)
//         res.body.should.be.a('object')
//         res.body.firstName.should.be.equal(dummyUser.firstName)
//         const userId = res.body._id
//         console.log(res.body);
// })