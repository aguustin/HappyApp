import mongoose from "mongoose"

const pedidoSchema = new mongoose.Schema({
    usuario: {type: String},
    pedidos: [{
        producto: {type: String},
        cantidad: {type: Number}
    }]
})

export default mongoose.model("pedidosModel", pedidoSchema)