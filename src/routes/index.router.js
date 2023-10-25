var express = require('express');
var router = express.Router();
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const eventoRoutes = require('./eventoRoutes');

router.use( '/', require('./hello.router'));
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/eventos', eventoRoutes);

router.get('*', (req, res) => res.status(400).send({
  message: 'Bad request.',
}));

module.exports = router;