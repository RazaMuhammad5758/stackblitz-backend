import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,  // jb b refernece btana hoga to type ese hi likhengy
        ref: "User"   // reference user.models k User se uthaega
    },
    subTodos: [ 

        {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sub_todo"
        }
    ] // array of sub_todos
}, {timestamps: true})

export const Todo = mongoose.models("Todos", todoSchema)