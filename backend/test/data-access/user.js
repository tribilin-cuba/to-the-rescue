import chai from "chai"
import UserManager from "../../managers/user-manager.js"
import { dummyUser } from "../data/data.js"

const should = chai.should()

context('Testing Data access for Users', () => {

    const userManager = new UserManager()
    
    describe('CRUD for Users', () => {
        
        it('Should store the user without errors', async () => {

            await userManager.insert(dummyUser)
        })

        it('Should retrieve the user', async () => {

            var user = (await userManager.find({firstName: 'John'}))[0]
            user.should.have.property('lastName').equal(dummyUser.lastName)
        })

        it('Should update the user', async () => {

            await userManager.update({firstName: 'John'}, {lastName: 'Wall'})

            const user = (await userManager.find({firstName: 'John'}))[0]

            user.lastName.should.be.equal('Wall')
        })

        it('Should delete the user', async () => {

            await userManager.delete({firstName: 'John'})

            const user = await userManager.find({firstName: 'John'})

            user.length.should.be.eq(0)
        })
    })

    describe('Testing if the effect of an extra token parameter', () => {

        it('Should insert the new user with the extra parameter without errors', async () => {

            userManager.insert({
                ...dummyUser,
                lastName: 'Wall',
                secondLastName: 'WithToken',
                token: 'qwerty'
            })

        })
    })
})