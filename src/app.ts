import express, { Application } from 'express'
import morgan from 'morgan'
import router from './routes/index'
import path from 'path'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import hasAccess from './auth/hasAccess'
//const MongoStore = require('connect-mongo')(session);


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
        this.app.use((req, res, next) => {
            let admin = 'administrador'
            let contribuyente = 'contribuyente'
            let inspector = 'inspector'
            if (admin.localeCompare(req.session.role) === 1) {
                res.locals.isAdmin = true
            }
              else {
                res.locals.isAdmin = false
                if (inspector.localeCompare(req.session.role) === 1) {
                    res.locals.isInspector = true
                } else {
                    res.locals.isInspector = false
                    if (contribuyente.localeCompare(req.session.role) === 1) {
                        res.locals.isContri = true
                    } else {
                        res.locals.isContri = false
                    }
                }
            }
            console.log(req.session.role)
            next();
        });
    }
    router() {
        this.app.use('/', router)
    }
    // this folder for this application will be used to store public files
    uploadsConfig() {
        this.app.use('/uploads', express.static(path.resolve('uploads')))
        this.app.use(express.static(path.join(__dirname, 'public')));
    }
    async listen() {
        this.app.listen(this.app.get('port'))
        console.log('Server on port', 3000)
    }
}