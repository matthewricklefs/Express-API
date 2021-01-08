const express = require("express")
const router = express.Router()

//import Todo Model
const Todos = require("../models/todoModel")

//GET
router.get('/todos', (req,res) => {
    Todos.find( (err, todos) => {
        if(err){
            res.status(404).json({ message: "Get todos error", error: `${err}` })
        }
        else {
            res.status(200).json(todos)
        }
    })
})

//POST 
router.post('/todo', (req, res) => {
    const todo = new Todos(req.body)

    todo
        .save()
        .then((todo) => {
            const { _id, title, done } = todo

            res.status(200).json({ id: todo._id, title, done })
        })
        .catch(err => {
            res.status(400).json({ message: "Unable to post", errors: `${err}` })
        })
})

module.exports = router;
