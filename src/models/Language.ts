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
        about: {type: String},
        link: {type: String},
        free: {type: Boolean, required: true},
        type: {type: String, required: true},
        date: {type: Date}
        // i know there's more to add to this
    }]
})

export default mongoose.models.Language || mongoose.model('Language', ResourceSchema)