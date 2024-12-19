import express, { urlencoded } from "express"
import morgan from "morgan"
import { port } from "./config.js"
import { connection } from "./database.js"
import pedidosRoutes from "./routes/pedidosRoutes.js"

const app = express()

connection()

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({extended: true}))
app.use(morgan("dev"))

//routes

app.use(pedidosRoutes)

app.listen(port, console.log("Server conectado"))