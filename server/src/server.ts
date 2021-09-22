import express from 'express'
import morgan from 'morgan';
import cors from 'cors'
import apiRoutes from './routes/index'
import { notFound, errorHandler } from './middlewares';
import session from 'express-session';

class Server {
    private app: express.Application;
    public port = process.env.PORT || 5050;
    protected corsOptions = {
        origin: 'http://localhost:3000',
        credentials: true
    }
    protected sessionOptions = {
        secret:  process.env.SECRET_TOKEN ||  'keyboard cat',
        resave: false,
        saveUninitialized: true,
    }

    constructor() {
        this.app = express();
        this.middlewares();
        this.rootPath()
        this.routesPath();
        this.app.use(notFound);
        this.app.use(errorHandler);
    }

    private middlewares(): void {
        this.app.use(cors(this.corsOptions));
        this.app.use(session(this.sessionOptions))
        this.app.use(morgan('tiny'))
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
    }
    
    private rootPath(): void {
        this.app.get('/', (req, res) => {
            res.status(200).json({
                message: 'Hello World'
            })
        })
    }

    private routesPath(): void {
        this.app.use('/api/v1', apiRoutes)
    }

    public start(): void{
        this.app.listen(this.port, () => {
            console.log(`Listening at http://localhost:${this.port}`);
        })
    }
}

export default Server;