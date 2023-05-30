// actual language data
import mongoose from "mongoose";

const ResourceSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    code: { // en, zh, fr
        required: true,
        type: String
    },
    emoji: {
        type: String
    },
    about: {
        required: true,
        type: String,
        maxLength: 250
    },
    resource: [{
        name: {type: String},
        shortAbout: {type: String, maxLength: 250},
        about: {type: String},
        link: {type: String},
        free: {type: Boolean, required: true},
        type: {type: String, required: true},
        date: {type: Date},
        image: {type: String}
    }]
})

export default mongoose.models.Language || mongoose.model('Language', ResourceSchema)