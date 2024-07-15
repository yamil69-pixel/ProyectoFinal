const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const isAuthenticated = require('../middleware/isAuthenticated');

router.post('/agregar-al-carrito', cartController.addToCart);
router.post('/eliminar-del-carrito', isAuthenticated, cartController.removeFromCart);
router.get('/carrito', isAuthenticated, cartController.viewCart);
router.post('/finalizar-compra', isAuthenticated, cartController.checkout);

module.exports = router;