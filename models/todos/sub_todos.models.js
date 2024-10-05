import mongoose from " mongoose"

const sub_todoSchema = new mongoose.Schema({
    content:{
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    createdBy: {
        type: mongoose.Schemas.Types.OpjectId,
        ref: "User"
    }
}, {timestamps: true})

export const Sub_todo = mongoose.model("Sub_todo", sub_todoSchema) 