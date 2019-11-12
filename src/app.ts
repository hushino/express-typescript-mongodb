import express, { Application } from 'express'
import morgan from 'morgan'
import router from './routes/index'
import path from 'path'

export class App {
    private app: Application

    constructor(private port?: number | string) {
        this.app = express()
        this.settings()
        this.middlewares()
        this.router()
        this.uploadsConfig()
    }
    settings() {
        this.app.set('port', this.port || process.env.PORT || 3000)
    }
    middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
    }
    router() {
        this.app.use('/api', router)
    }
    // this folder for this application will be used to store public files
    uploadsConfig() {
        this.app.use('/uploads', express.static(path.resolve('uploads')))
    }
    async listen() {
        await this.app.listen(this.app.get('port'))
        console.log('Server on port', 3000)
    }
}