import mongoose from "mongoose"

const todosSchema = new mongoose.Schema({})

export const Todos = mongoose.models("Todos", todosSchema)