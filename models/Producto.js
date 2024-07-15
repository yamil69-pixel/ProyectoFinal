const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    // id: String,
    nombre: String,
    descripcion: String,
    precio: Number,
    disponibilidad: Boolean,
    image: String
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;