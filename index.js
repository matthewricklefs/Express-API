require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const port = process.env.PORT || 4000
const app = express()

const todoRoutes = require('./routes/todoRoutes')

mongoose.connect(
    process.env.MONGODB_URI, 
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, 
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