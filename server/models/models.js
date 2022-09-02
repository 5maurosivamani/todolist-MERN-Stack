const mongoose = require("mongoose")

const taskScema = new mongoose.Schema({
    toDo: String,
    isCompleted: Boolean
})

const Task = mongoose.model("task", taskScema)

module.exports = Task

