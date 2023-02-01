const getTareas = (req, res) =>{
    res.status(200).json({message: "obtener tareas"})
}

const setTarea = (req, res) =>{
    if (!req.body.texto){
        res.status(400)
        throw new error;
        //res.status(200).json({message: "por favor escribe una descripción"})
    }
}

const updateTarea = (req,res) =>{
    res.status(200).json({message: `Tarea ${req.params.id} actualizada`})
}

const deleteTarea = (req,res)=>{
    res.status(200).json({message: `Tarea ${req.params.id} eliminada`})
}

module.exports = {
    getTareas,
    setTarea,
    updateTarea,
    deleteTarea
}