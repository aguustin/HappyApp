import mongoose from "mongoose";
import { mongoose_uri } from "./config.js";

export const connection = async () => {
    try {
        await mongoose.connect(mongoose_uri)
        
        console.log("Base de datos conectada")
    } catch (error) {
        console.log(error)
    }
}