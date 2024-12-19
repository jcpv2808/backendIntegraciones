const Categoria = require('../models/Categoria.js')

exports.crearCategoria = async (req, res) =>{
    try{
        const {nombre, descripcion} = req.body

        const categoria = Categoria({
            nombre,
            descripcion
        })

        const respuesta = await categoria.save()

        res.status(200).send('categoria creada')
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al crear la categoría' })
    }
} 

exports.listarCategoria = async (req, res) =>{
    try{
        
        const respuesta = await Categoria.find()

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al listar las categoría' })
    }
} 

exports.consultarCategoria = async (req, res) =>{
    try{
        const {id} = req.params

        const respuesta = await Categoria.findOne({_id: id})

        res.status(200).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al listar las categoría' })
    }
} 

exports.actualizarCategoria = async (req, res) =>{
    try{
        const {id} = req.params
        const datos = req.body

        const respuesta = await Categoria.findOneAndUpdate({_id: id}, datos)

        if(!respuesta) return res.status(404).json({error:'Categoria no encontrada'})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al actualizar la categoría' })
    }
} 

exports.eliminarCategoria = async (req, res) =>{
    try{
        const {id} = req.params

        const respuesta = await Categoria.deleteOne({_id: id})

        if(!respuesta) return res.status(404).json({error:'Categoria no encontrada'})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al eliminar la categoría' })
    }
} 