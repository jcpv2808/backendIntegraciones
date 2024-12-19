const Cliente = require('../models/Cliente.js')

exports.crearCliente = async (req, res) =>{
    try{
        const {nombre, email, nro, dni} = req.body

        const cliente = Cliente({
            nombre,
            email,
            nro,
            dni
        })

        const respuesta = await cliente.save()

        res.status(201).send('cliente creado')
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al crear el cliente' })
    }
} 

exports.listarCliente = async (req, res) =>{
    try{
        
        const respuesta = await Cliente.find()

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al listar los clientes' })
    }
} 

exports.consultaCliente = async (req, res) =>{
    try{
        const {id} = req.params
        const respuesta = await Cliente.findOne({_id: id})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al listar los clientes' })
    }
} 

exports.actualizarCliente = async (req, res) =>{
    try{
        const {id} = req.params
        const datos = req.body

        const respuesta = await Cliente.findOneAndUpdate({_id: id}, datos)

        if(!respuesta) return res.status(404).json({error:'Cliente no encontrado'})

        res.status(200).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al actualizar el cliente' })
    }
} 

exports.eliminarCliente = async (req, res) =>{
    try{
        const {id} = req.params

        const respuesta = await Cliente.deleteOne({_id: id})

        if(!respuesta) return res.status(404).json({error:'Cliente no encontrada'})

        res.status(201).json(respuesta)
    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Error al eliminar el cliente' })
    }
} 