const { Reserva } = require('../models/associations');

class ReservaService {
    static async listarReservas() {
        return await Reserva.findAll();
    }
}

module.exports = ReservaService;