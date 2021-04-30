import mongoose from 'mongoose'

var TokenSchema = new mongoose.Schema({
    token:{
        type: String,
        required: true
    },
    user_id: {
        type: String
    }
})

var TokenModel = mongoose.model('token', TokenSchema)

export default TokenModel