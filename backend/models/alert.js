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
        enum:['Macho', 'Hembra', 'Desconocido']
    },

    age: {
        type: String
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
    },

    address: {
        type: String,
    },

    alert_type: {
        type: String,
        enum: ['Perdido', 'Abandonado', 'Adopción', 'Crítico'],
        required: true
    },

    email: {
        type: String
    },

    phone: {
        type: String
    },

    description: {
        type: String
    }
})

export var AlertModel = mongoose.model('alert', AlertSchema)