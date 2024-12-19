const express = require('express')
const router = express.Router()
const meseroController = require('../controllers/meseroController.js')
const verifyToken = require('../config/verifyToken.js')

router.post('/crearMesero', meseroController.crearMesero)
router.post('/consultarCuentaMesero', meseroController.consultarCuentaMesero)
router.get('/listarMesero', verifyToken, meseroController.listarMesero)
router.put('/actualizarMesero/:id', verifyToken, meseroController.actualizarMesero)
router.delete('/eliminarMesero/:id', verifyToken, meseroController.eliminarMesero)
router.get('/consultarMesero/:id', verifyToken, meseroController.consultarMesero)

module.exports = router