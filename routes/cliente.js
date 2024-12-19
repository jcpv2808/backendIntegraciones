const express = require('express')
const router = express.Router()
const clienteController = require('../controllers/clienteController.js')

router.post('/crearCliente', clienteController.crearCliente)
router.get('/listarCliente', clienteController.listarCliente)
router.get('/consultaCliente/:id', clienteController.consultaCliente)
router.put('/actualizarCliente/:id', clienteController.actualizarCliente)
router.delete('/eliminarCliente/:id', clienteController.eliminarCliente)

module.exports = router