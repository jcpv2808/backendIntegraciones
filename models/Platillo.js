const mongoose = require('mongoose')

const platilloSchema = new mongoose.Schema({
    nombre: String,
    ingredientes: [String],
    precio: Number,
    imagen: String
})

const ModelPlatillo = mongoose.model('Platillo', platilloSchema)
module.exports = ModelPlatillo