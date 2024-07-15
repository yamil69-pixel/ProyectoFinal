const mongoose = require('mongoose');
const fs = require('fs');
const Producto = require('./models/Producto');
const connectDB = require('./config/db');

const loadData = async () => {
    try {
        await connectDB();
        const data = fs.readFileSync('productos.json');
        const productos = JSON.parse(data);

        await Producto.deleteMany();
        await Producto.insertMany(productos);

        console.log('Datos cargados exitosamente');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error al cargar los datos', error);
        process.exit(1);
    }
};

loadData();