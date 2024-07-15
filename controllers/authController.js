const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.getRegister = (req, res) => {
    res.render('register', { error: null });
};

exports.postRegister = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.render('register', { error: 'Error al registrar usuario' });
    }
};

exports.getLogin = (req, res) => {
    res.render('login', { error: null });
};

exports.postLogin = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            req.session.userId = user._id;
            req.session.carrito = req.session.carrito || [];
            req.session.save();
            console.log('Sesión iniciada para el usuario:', user.username);
            res.redirect('/');
        } else {
            res.render('login', { error: 'Credenciales incorrectas' });
        }
    } catch (error) {
        console.error(error);
        res.render('login', { error: 'Error al iniciar sesión' });
    }
};

exports.logout = (req, res) => {
    req.session.destroy();
    res.redirect('/');
};