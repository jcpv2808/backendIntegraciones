const mongoose = require('mongoose')

const OrdenSchema = new mongoose.Schema({
    platillos: [{
        nombre: String,
        cantidad: Number
    }],
    idMesa: Number,
    estado: {
        type: String,
        enum:['pendiente', 'entregado', 'cancelado'] 
    }
})

const ModelOrden = mongoose.model('Orden', OrdenSchema)
module.exports = ModelOrden