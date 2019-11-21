import { Schema, model, Document } from 'mongoose'

const schema = new Schema({
    cuit: String,
    patente: String,
    image: String
})

interface ICamion extends Document {
    cuit: string,
    patente: string,
    image: string
}

export default model<ICamion>('Camion', schema)