const express = require('express')
const router = express.Router()
const ordenController = require('../controllers/ordenController.js')

router.post('/crearOrden', ordenController.crearOrden)
router.get('/listarOrden', ordenController.listarOrden)
router.get('/consultaOrdenPorMesa/:idMesa', ordenController.consultaOrden)
router.put('/actualizarOrden/:id', ordenController.actualizarOrden)
router.delete('/eliminarOrden/:id', ordenController.eliminarOrden)

module.exports = router