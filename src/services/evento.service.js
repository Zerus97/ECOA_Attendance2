const Evento = require("../models/evento.model");

class EventoService {
    static async createEvent(data) {
        try {
            const evento = await Evento.create(data);
            return evento;
        }

        catch (error) {
            throw error;
        }
    }

    static async getAllEventos() {
        try {
            const eventos = await Evento.findAll();
            return eventos;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EventoService;