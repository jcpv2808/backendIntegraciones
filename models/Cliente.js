const mongoose = require('mongoose')

const clienteSchema = new mongoose.Schema({
    nombre: String,
    email: String,
    nro: String,
    dni: String
})

const ModelCliente = mongoose.model('Cliente', clienteSchema)
module.exports = ModelCliente