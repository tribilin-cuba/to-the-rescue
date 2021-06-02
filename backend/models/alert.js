import mongoose from "mongoose"

var AlertSchema = new mongoose.Schema({

    author_id : {
        type: String,
        required: true
    },

    animal : {
        type: String,
    },

    gender : {
        type: String,
        enum:['Male', 'Female'],
        required: false
    },

    age: {
        type: Number
    },

    date: {
        type: Date,
        default: Date.now()
    },

    picture_path: {
        type: String,
    },

    province: {
        type: String,
        required: true
    },

    municipality: {
        type: String,
        required: true
    },

    address: {
        type: String,
    },

    alert_type: {
        type: String,
        enum: ['Lost', 'Abandoned', 'Seek Adoption', 'Critical'],
        required: true
    },

    email: {
        type: String
    },

    phone: {
        type: String
    }
})

export var AlertModel = mongoose.model('alert', AlertSchema)