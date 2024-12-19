import pedidosModel from "../models/pedidosModel.js"

export const hacerPedidoController = async (req, res) => {
    const {usuario, productos} = req.body;

    await pedidosModel.insertMany({
        usuario: usuario,
        productos:[
            productos
        ]
    })

    res.sendStatus(200)
}

export const obtenerPedidosController = async (req, res) => {
    const response = await pedidosModel.find()

    res.send(response)
}