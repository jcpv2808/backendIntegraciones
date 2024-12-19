const Platillo = require('../models/Platillo.js')
exports.crearPlatillo = async (req, res) =>{
    try{
        const {nombre, ingredientes, precio, imagen} = req.body

        const platillo = Platillo({
            nombre,
            ingredientes,
            precio,
            imagen,
        })

        const respuesta = await platillo.save()

        res.status(200).send('platillo creado')
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al crear el platillo' })
    }
}

exports.listarPlatillo= async (req, res) =>{
    try{
        
        const respuesta = await Platillo.find()

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al listar los platillos' })
    }
} 

exports.consultaPlatillo = async (req, res) =>{
    try{
        const {id} = req.params

        const respuesta = await Platillo.findOne({_id: id})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al listar los platillos' })
    }
} 

exports.actualizarPlatillo= async (req, res) =>{
    try{
        const {id} = req.params
        const datos = req.body

        const respuesta = await Platillo.findOneAndUpdate({_id: id}, datos)

        if(!respuesta) return res.status(404).json({error:'Platillo no encontrado'})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al actualizar el platillo' })
    }
} 

exports.eliminarPlatillo = async (req, res) =>{
    try{
        const {id} = req.params

        const respuesta = await Platillo.deleteOne({_id: id})

        if(!respuesta) return res.status(404).json({error:'Platillo no encontrado'})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al eliminar e platillo' })
    }
} 