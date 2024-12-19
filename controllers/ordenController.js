const Orden = require('../models/Orden.js')

exports.crearOrden = async (req, res) =>{
    try{
        const {platillos, idMesa, estado} = req.body

        const orden = Orden({
            platillos,
            idMesa,
            estado,
        })

        const respuesta = await orden.save()

        res.status(201).send('orden creada')
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al crear la orden' })
    }
}

exports.listarOrden= async (req, res) =>{
    try{
        
        const respuesta = await Orden.find()

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al listar las ordenes' })
    }
} 

exports.consultaOrden= async (req, res) =>{
    try{ 
        const {idMesa} = req.params

        const respuesta = await Orden.findOne({idMesa: idMesa})

        if(!respuesta) return res.status(404).json({error:'Orden no encontrada'})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al obtener la orden' })
    }
} 

exports.actualizarOrden= async (req, res) =>{
    try{
        const {id} = req.params
        const datos = req.body

        const respuesta = await Orden.findOneAndUpdate({_id: id}, datos)

        if(!respuesta) return res.status(404).json({error:'Orden no encontrada'})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al actualizar la orden' })
    }
} 

exports.eliminarOrden = async (req, res) =>{
    try{
        const {id} = req.params

        const respuesta = await Orden.deleteOne({_id: id})
        
        if(!respuesta) return res.status(404).json({error:'Orden no encontrada'})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al eliminar la orden' })
    }
} 