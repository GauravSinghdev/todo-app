

const mongoose = require("mongoose");
//mongodb url handy
// mongodb+srv://gauravkalakoti19:MangodbOP*123@cluster0.qptfx8k.mongodb.net/todos

mongoose.connect("mongodb+srv://gauravkalakoti19:MangodbOP*123@cluster0.qptfx8k.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}