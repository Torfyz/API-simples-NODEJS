import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    dateMoment: {
        type: Date,
        default: Date.now()
    }
})


export default mongoose.model('User', userSchema)