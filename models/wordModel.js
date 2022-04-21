import mongoose from "mongoose";

const wordSchema = mongoose.Schema({

    word: {
        type: String,
        required: true,
    },
    category:{
        type: String,
        required: false,
    },
    definition: {
        type: String,
        required: true
    },
    audio: {
        type: String,
        required: false
    }
})

wordSchema.index({ word : 'text', category : 'text' })

const WordModel = mongoose.model('words', wordSchema);

export default WordModel;