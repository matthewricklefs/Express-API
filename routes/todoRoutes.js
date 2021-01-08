const express = require("express")
const router = express.Router()

//import Todo Model
const Todos = require("../models/todoModel")

//GET
router.get('/todos', (req,res) => {
    console.log("we out here!")
    res.end()
})

module.exports = router;
