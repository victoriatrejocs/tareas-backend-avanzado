const express = require('express')
const router = express.Router()
const { getTareas, setTarea, updateTarea, deleteTarea } = require('../controllers/tareaController')

router.route('/').get(getTareas).post(setTarea)
router.route('/:id').delete(deleteTarea).put(updateTarea)

//router.get('/', getTareas)
//router.post('/', setTarea)
//router.put('/:id', updateTarea)
//router.delete('/:id', deleteTarea)

module.exports = router