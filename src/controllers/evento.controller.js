const express = require("express");
const router = express.Router();
const EventoService = require("../services/evento.service");

exports.create = async (req, res) => {
    try {
        const eventData = req.body;
        const evento = await EventoService.createEvent(eventData);
        res.status(201).json({ message: 'Evento created successfully!', evento });
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};

exports.getAll = async (req, res) => {
    try {
        const eventos = await EventoService.getAllEventos();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: 'An error occurred', error: error.message });
    }
};

module.exports = router;