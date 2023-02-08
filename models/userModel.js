const mongoose = require ("mongoose")

const userSchema = mongoose.Schema({
    name:{
    type: String,
    required: [true, "Por favor ingresa tu nombre de usuario"]
    },

    email: {
        type: String,
        required: [true, "Por favor ingresa tu correo electrónico"],
        unique: true
        //unique: que en toda la coleccion de datos solo puede existir una vez ese correo, no se puede repetir
    },

    password: {
        type: String,
        required: [true, "Por favor ingresa tu contraseña"]
    }
},
    {
    timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema)