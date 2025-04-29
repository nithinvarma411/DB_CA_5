import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export const Contact = model('Contact', contactSchema);