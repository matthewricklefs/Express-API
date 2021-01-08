const mongoose = require("mongoose")
const Schema = mongoose.Schema

const todos = new Schema ({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("todos", todos)