import mongoose from "mongoose"

var AlertSchema = new mongoose.Schema({

    author : {
        type: String
    },

    date: {
        type: Date,
        default: Date.now()
    },

    picture_path: {
        type: String
    },

    province: {
        type: String
    },

    municipality: {
        type: String
    },

    address: {
        type: String
    },

    alert_type: {
        type: String,
        enum: ['Lost', 'Abandoned', 'Seek Adoption', 'Critical Condition']
    }
})

export var AlertModel = mongoose.model('alert', AlertSchema)