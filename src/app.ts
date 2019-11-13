import express, { Application } from 'express'
import morgan from 'morgan'
import router from './routes/index'
import path from 'path'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import session from 'express-session'
const MongoStore = require('connect-mongo')(session);


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
        // view engine setup
        this.app.set('views', path.join(__dirname, 'views'))
        this.app.set('view engine', 'ejs');
    }
    middlewares() {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(helmet())
        this.app.use(express.urlencoded({ extended: false }))
        this.app.use(cookieParser())
        this.app.use(session({
            secret: 'somesecret3',
            /*  store: new MongoStore({url: 'mongodb://localhost/photodb', 
                 useNewUrlParser: true,
                 useUnifiedTopology: true,
                 useFindAndModify: false,
                 ttl: 7 * 24 * 60 * 60
             }), */
            saveUninitialized: false,
            resave: false,
            cookie: { secure: false, maxAge: 600000 }
        }));
    }
    router() {
        this.app.use('/', router)
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