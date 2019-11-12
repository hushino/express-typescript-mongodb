import { connect } from 'mongoose'

export async function startConnection() {
    await connect('mongodb://localhost/photodb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    }).then(() => {
        console.log('Database is connected')
    }).catch((e) => {
        console.log(e)
    })
}