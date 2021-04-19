import { URL } from "../../config/constant.js"

import axios from 'axios'
import { expect } from 'chai'

context('Test the user endpoints of the api', () => {

    describe('Basic CRUD endpoints', () => {

        const dummyUser = {
            firstName: 'John',
            lastName: 'Doe'
        }
    
        var userId = null
        
        it('Should store the user without errors', async () => {

            const user = (await axios.post(URL + "/user", dummyUser)).json()

            userId = user._id

            console.log("USER ID:", userId);

            expect(user).to.have.property('firstName').equal('John')
        })

        it('Should retrieve the user', async () => {

            var user = (await axios.get(URL + "/user/" + userId)).json()
            
            expect(user).to.have.property('lastName').equal(dummyUser.lastName)
        })

        it('Should update the user', async () => {

            const user = (await axios.put(URL + "/user/" + userId, {
                ...dummyUser,
                lastName: 'Wall'
            })).json()

            expect(user.lastName).to.be.equal('Wall')
        })

        it('Should delete the user', async () => {

            
            await axios.delete(URL + "/user/" + userId)

            const user = await userManager.find({_id: userId})

            expect(user.length).to.be.eq(0)
        })
    })

})