const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const port = process.env.PORT || 4000
const app = express()

const todoRoutes = require('./routes/todoRoutes')

mongoose.connect("mongodb://localhost:27017/todo_db", 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    (err) => {
        if(err) {
            console.log("Mongo Connection Error: ", err)
        }
        else {
            console.log("DB connected")
        }  
    }
)

app.use(cors())
app.use(express.json())

// Define root routes for our router
app.use("/", todoRoutes)

app.listen(port, () => {
    console.log( ` Server is up on port ${port}` )
})