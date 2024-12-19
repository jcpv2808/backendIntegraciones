const mongoose = require("mongoose")

const conectarBD = async ()=>{
    try{
        if(mongoose.connection.readyState === 0){
            await mongoose.connect('mongodb://127.0.0.1:27017/finalIntegraciones', {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
        }
    }catch(error){
        console.log(error)
        process.exit()
    }
}

module.exports = conectarBD