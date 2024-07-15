require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const path = require('path');
const flash = require('./middleware/flash');
const connectDB = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

// Conexión a MongoDB
connectDB();

// Configuración de Express
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Configuración de sesión
app.use(session({
    secret: process.env.SESSION_SECRET || 'defaultSecret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URL }),
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hora de vida de la sesión
}));

// Middleware para pasar datos de sesión a las vistas
app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
});

// Middleware para manejar mensajes flash
app.use(flash);

// Rutas
app.use('/', require('./routes/productRoutes'));
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/cartRoutes'));

// Middleware para manejar errores de rutas no encontradas
app.use((req, res, next) => {
    res.status(404).send("Página no encontrada");
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});