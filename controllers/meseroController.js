const Mesero = require('../models/Mesero.js')
const jwt = require('jsonwebtoken')
const config = require('../config/global')

exports.crearMesero = async (req, res) => {
    try {
        const { nombres, apellidos, direccion, dni, edad, correo, password } = req.body

        const mesero = new Mesero({
            nombres,
            apellidos,
            direccion,
            dni,
            edad,
            correo,
            password
        })

        mesero.password = await mesero.encryptPassword(mesero.password)
        await mesero.save()

        const token = jwt.sign({ id: mesero._id }, config.secret, {
            expiresIn: 60 * 60 * 24 //1 dia
        })
        res.status(200).json({ auth: true, token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al crear el mesero' })
    }
}

exports.consultarCuentaMesero = async (req, res) => {
    try {
        const { correo, password } = req.body

        const mesero = await Mesero.findOne({ correo: correo })

        if(!mesero) return res.status(404).send('El Mesero no Existe')

        const passwordValido = mesero.validatePassword(password)

        if (!passwordValido) return res.status(401).json({ mensaje: "contraseña incorrecta" })

        const token = jwt.sign({ id: mesero._id }, config.secret, {
            expiresIn: 60 * 60 * 24
        })
        
        res.status(200).json({ auth: true, token })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al consultar mesero' })
    }
}

exports.consultarMesero = async (req, res) => {
    try {
        const { id } = req.params

        const mesero = await Mesero.findOne({ _id: id })

        if(!mesero) return res.status(404).send('El Mesero no Existe')

        res.status(200).json(mesero)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al consultar mesero' })
    }
}

exports.listarMesero = async (req, res) => {
    try {

        const respuesta = await Mesero.find({ eliminado: false })

        res.status(201).json(respuesta)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al listar los meseros' })
    }
}

exports.actualizarMesero = async (req, res) => {
    try {
        const { id } = req.params
        const datos = req.body

        const respuesta = await Mesero.findOneAndUpdate({ _id: id }, datos)

        if (!respuesta) return res.status(404).json({ error: 'Mesero no encontrado' })

        res.status(201).json(respuesta)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al actualizar el mesero' })
    }
}

exports.eliminarMesero = async (req, res) => {
    try {
        const { id } = req.params

        const mesero = await Mesero.findById(id)

        if (!mesero) return res.status(404).json({ error: 'Mesero no encontrado - buscar' })

        mesero.eliminado = true

        const respuesta = await mesero.save()
        res.status(201).json(respuesta)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error al eliminar el mesero' })
    }
}

