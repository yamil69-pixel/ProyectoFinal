const productos = require('../productos.json');

exports.addToCart = (req, res) => {
    const id = parseInt(req.body.id, 10);
    const producto = productos.find(p => p.id === id);
    if (producto) {
        req.session.carrito = req.session.carrito || [];
        req.session.carrito.push(producto);
        console.log('Producto agregado al carrito:', producto.nombre);
        res.redirect('/');
    } else {
        console.log('Producto no disponible o no encontrado');
        res.status(404).send('Producto no disponible o no encontrado');
    }
};

exports.removeFromCart = (req, res) => {
    const id = parseInt(req.body.id, 10);
    if (req.session.carrito) {
        req.session.carrito = req.session.carrito.filter(producto => producto.id !== id);
        req.session.save(() => {
            res.redirect('/carrito');
        });
    } else {
        res.redirect('/carrito');
    }
};

exports.viewCart = (req, res) => {
    const carrito = req.session.carrito || [];
    res.render('carrito', { carrito });
};

exports.checkout = (req, res) => {
    req.session.carrito = [];
    req.session.save(() => {
        req.flash('success', 'Compra hecha con éxito');
        res.redirect('/carrito');
    });
};