const asyncHandler = require("express-async-handler")

const Tarea = require("../models/tareaModel")

const getTareas = asyncHandler(async(req, res) =>{
    const tareas = await Tarea.find()
    res.status(200).json(tareas)
})

const setTarea = asyncHandler(async(req, res) =>{
    if (!req.body.texto){
        res.status(400)
        throw new Error("Por favor escibe una descripción de la tarea");
        //res.status(200).json({message: "por favor escribe una descripción"})
    }

    const tarea = await Tarea.create(({
        texto: req.body.texto
    }))
    res.status(201).json(tarea)
})

const updateTarea = asyncHandler(async(req,res) =>{

    const tarea = await Tarea.findById(req.params.id)

    if(!tarea){
        res.status(400)
        throw new Error ("Tarea no encontrada")
    }

    const updatedTarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json({message: `Tarea ${req.params.id} actualizada`})
})


const deleteTarea = asyncHandler(async (req, res) => {

    const tarea = await Tarea.findById(req.params.id)

    if (!tarea) {
        res.status(400)
        throw new Error('Tarea no encontrada')
    }

    //const deletedTarea = await Tarea.findByIdAndDelete(req.params.id)
    await tarea.remove()

    res.status(200).json(req.params.id)
})


module.exports = {
    getTareas,
    setTarea,
    updateTarea,
    deleteTarea
}