import mongoose from "mongoose"

var AlertSchema = new mongoose.Schema({

    author_id : {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now()
    },

    picture_path: {
        type: String,
        required: false
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
        required: false
    },

    alert_type: {
        type: String,
        enum: ['Lost', 'Abandoned', 'Seek Adoption', 'Critical Condition'],
        required: true
    }
})

export var AlertModel = mongoose.model('alert', AlertSchema)