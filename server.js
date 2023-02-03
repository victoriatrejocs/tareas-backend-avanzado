const express = require("express")
const colors = require("colors")
const dotenv = require("dotenv").config()
const {errorHandler} = require("./middleware/errorMiddleware")
const connectDB = require ("./config/db")
const port = process.env.PORT || 5000

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use("/api/tareas", require("./routes/tareasRoutes"))

app.use(errorHandler)

app.listen(port,()=> console.log(`Server started on port ${port}`))

