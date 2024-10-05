import mongoose from " mongoose"

const sub_todoSchema = new mongoose.Schema({
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
    }
}, {timestamps: true})

export const Sub_todo = mongoose.model("Sub_todo", sub_todoSchema) 