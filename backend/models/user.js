import mongoose from 'mongoose'

var UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        maxLength: 30,
        required: true,        
    },

    lastName: {
        type: String,
        maxLength: 30,
        required: true,        
    },

    secondLastName: {
        type: String,
        maxLength: 30,
        required: false,        
    },

    email: {
        type: String,
        maxLength: 30,
        required: true,        
    },

    phone: {
        type: String,
        maxLength: 15,
        required: false,        
    }
})

var UserModel = mongoose.model('user', UserSchema)

export default UserModel