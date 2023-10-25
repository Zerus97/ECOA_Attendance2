const express = require('express');
const EventoController = require('../controllers/evento.controller'); 

const router = express.Router();

router.post('/', EventoController.create);

router.get('/', EventoController.getAll);

module.exports = router;