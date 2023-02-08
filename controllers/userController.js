const jwt = require("jsonwebtoken")
const bcrypt = require ("bcryptjs")
const asyncHandler = require ("express-async-handler")

const User = require("../models/userModel")

const registerUser = asyncHandler (async(req, res) => {
    const{name, email, password} = req.body

    if(!name || !email || !password){
        res.status(400)
        throw new Error ("Faltan datos, favor de verificar")
    }

    const userExists = await User.findOne({email})

    if(userExists) {
        res.status(400)
        throw new Error ("Este usuario ya existe")
    }

    //HASH PASSWORD
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email
        })
        
    } else{
        res.status (400)
        throw new Error ("No se pudo agregar el usuario")
    }
})

const loginUser = asyncHandler (async(req, res) => {
    res.json({message: "Login Usuario"})
})

const dataUser = asyncHandler (async(req, res) => {
    res.json({message: "Data Usuario"})
})

module.exports = {
    registerUser,
    loginUser,
    dataUser
}