import { expect } from "chai"
import UserManager from "../../managers/user-manager.js"
import { dummyUser } from "../data/data.js"

context('Testing Data access for Users', () => {

    describe('CRUD for Users', () => {

        const userManager = new UserManager()
        
        it('Should store the user without errors', async () => {

            await userManager.insert(dummyUser)
        })

        it('Should retrieve the user', async () => {

            var user = (await userManager.find({firstName: 'John'}))[0]
            expect(user).to.have.property('lastName').equal(dummyUser.lastName)
        })

        it('Should update the user', async () => {

            await userManager.update({firstName: 'John'}, {lastName: 'Wall'})

            const user = (await userManager.find({firstName: 'John'}))[0]

            expect(user.lastName).to.be.equal('Wall')
        })

        it('Should delete the user', async () => {

            await userManager.delete({firstName: 'John'})

            const user = await userManager.find({firstName: 'John'})

            expect(user.length).to.be.eq(0)
        })
    })
})