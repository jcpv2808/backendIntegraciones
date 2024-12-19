const express = require('express')
const router = express.Router()
const categoriaController = require('../controllers/categoriaController.js')

router.post('/crearCategoria', categoriaController.crearCategoria)
router.get('/listarCategoria', categoriaController.listarCategoria)
router.put('/actualizarCategoria/:id', categoriaController.actualizarCategoria)
router.delete('/eliminarCategoria/:id', categoriaController.eliminarCategoria)
router.get('/consultarCategoria/:id', categoriaController.consultarCategoria)

module.exports = router
