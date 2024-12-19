const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const MeseroSchema = new mongoose.Schema({
    nombres: String,
    apellidos: String,
    direccion: String,
    dni: String,
    edad: String,
    correo: String,
    password: String,
    eliminado: {
        type: Boolean,
        default: false
    }
})

MeseroSchema.methods.encryptPassword= async(password) =>{
    const salt = await bcrypt.genSaltSync(10)
    return bcrypt.hash(password,salt)
}
MeseroSchema.methods.validatePassword = function(password){
    return bcrypt.compare(password, this.password)
}

const ModelMesero = mongoose.model('Mesero', MeseroSchema)
module.exports = ModelMesero