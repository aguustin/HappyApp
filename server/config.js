import dotenv from "dotenv"

dotenv.config()

export const port = process.env.port

export const mongoose_uri = process.env.MONGOOSE_URI