const mongoose = require('mongoose')

const CategoriaSchema = new mongoose.Schema({
    nombre: String,
    descripcion: String,
})

const ModelCategoria = mongoose.model('Categoria', CategoriaSchema)
module.exports = ModelCategoria