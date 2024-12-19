const express = require('express')
const router = express.Router()
const platilloController = require('../controllers/platilloController.js')

router.post('/crearPlatillo', platilloController.crearPlatillo)
router.get('/listarPlatillo', platilloController.listarPlatillo)
router.get('/consultaPlatillo/:id', platilloController.consultaPlatillo)
router.put('/actualizarPlatillo/:id', platilloController.actualizarPlatillo)
router.delete('/eliminarPlatillo/:id', platilloController.eliminarPlatillo)

module.exports = router