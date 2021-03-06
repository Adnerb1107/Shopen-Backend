const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const connection = require('../database/config')

class Server{

    constructor(){
        this.app = express()
        this.port = process.env.PORT
        this.paths = {
            auth:      '/api/auth',
            busqueda:  '/api/busqueda',
            cat:       '/api/categorias',
            productos: '/api/productos',
            usuarios:  '/api/usuarios',
            uploads:  '/api/uploads',
        }
        this.connectDB()
        this.setMiddlewares()
        this.routes()
    }

    setMiddlewares(){
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.static('public'))
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath: true
        }));
    }
    
    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'))
        this.app.use(this.paths.busqueda, require('../routes/busqueda'))
        this.app.use(this.paths.cat, require('../routes/categorias'))
        this.app.use(this.paths.productos, require('../routes/productos'))
        this.app.use(this.paths.usuarios, require('../routes/usuarios'))
        this.app.use(this.paths.uploads, require('../routes/uploads'))
        this.app.use('*', require('../routes/undefined'))
    }
    
    connectDB(){
        connection()
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Escuchando en el puerto ${this.port}`)
        })
    }
}

module.exports = Server