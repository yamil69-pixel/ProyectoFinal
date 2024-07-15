const productos = require('../productos.json');

exports.getAllProducts = (req, res) => {
    res.render('index', { productos });
};