import dotenv from 'dotenv';
import express from 'express';
import homeRoutes from './src/routes/homeRoutes.js'
import userRoutes from './src/routes/userRoutes.js'
import tokenRoutes from './src/routes/tokenRoutes.js'

import cors from 'cors';

import './src/database/index.js'
import helmet from 'helmet';
dotenv.config();

class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(helmet())
        this.app.use(express.urlencoded({ extended:true }));
        this.app.use(express.json())
    }

    routes() {
        this.app.use('/', homeRoutes)
        this.app.use('/users/', userRoutes)
        this.app.use('/tokens/', tokenRoutes)
    }
}

export default new App().app;
