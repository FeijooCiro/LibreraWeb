import express, { Application } from 'express'
import cors from "cors"

import indexRoutes from '../routes/index.routes'
import librosRoutes from "../routes/libros.routes";

class Server {
    private App: Application
    private paths = {
        index: '/',
        listarcompleto: '/libros/listado',
        libros: '/libros'
    }

    constructor(private PORT?: number | string) {
        this.App = express()

        // Métodos iniciales
        this.Settings()
        this.middlewares()
        this.routes()
    }

    Settings() { this.App.set('port', this.PORT || process.env.PORT || 3000) }

    routes() {
        this.App.use(this.paths.index, indexRoutes)
        this.App.use(this.paths.libros, librosRoutes)
    }
 
    middlewares() {
        this.App.use( cors())
        this.App.use( express.json() )
        this.App.use( express.static('public'))
    }

    async Listen(): Promise<void> {
        await this.App.listen(this.App.get('port'))
        console.log('Server running in Port:', this.App.get('port'))
    }
}

export default Server