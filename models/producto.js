const {Schema, model} = require('mongoose')

const ProductoSchema = Schema({
    img: String,
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio'],
        unique: false
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    precio: {
        type: Number,
        required: true,
        default: 0
    },
    categoria: {
        type: Schema.Types.ObjectId,
        ref: 'Categoria',
        required: true
    },
    descripcion: String,
    disponible: {
        type: Boolean,
        default: true
    }
})

ProductoSchema.methods.toJSON = function(){
    const { __v, estado, ...data } = this.toObject()
    return data
}

module.exports = model('Producto', ProductoSchema)