import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    cuit: String,
    patente: String,
    foto: String
})

interface ICamion extends Document {
    cuit: string,
    patente: string,
    foto: string
}

export default model<ICamion>('Camion', schema)