const ReservaService = require('../services/ReservaService');

const ReservaController = {
    async listarReservas(req, res) {
        try {
            const reservas = await ReservaService.listarReservas();

            res.status(200).send(reservas);
        } catch (err) {
            res.status(404).send(err.message);
        }
    }
}

module.exports = ReservaController;