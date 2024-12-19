import { Router } from "express";
import { hacerPedidoController, obtenerPedidosController } from "../controllers/pedidosController.js";

const router = Router()

router.post('/hacerPedido', hacerPedidoController)

router.get('/obtenerPedidos', obtenerPedidosController)

export default router