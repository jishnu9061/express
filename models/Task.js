import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {type: Boolean, default: false},
},{ timestamps: true})

export default mongoose.model('Task', taskSchema);