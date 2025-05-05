const ReservaService = require('../services/ReservaService');

const ReservaController = {
    async listarReservas(req, res) {
        try {
            const reservas = await ReservaService.listarReservas();

            res.status(200).send(reservas);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async buscarReservaPorId(req, res) {
        try {
            const reserva = await ReservaService.buscarReservaPorId(req.params.id);
            res.status(200).send(reserva);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async cadastrarReserva(req, res) {
        try {
            const novaReserva = await ReservaService.cadastrarReserva(req.body);

            res.status(200).send(novaReserva);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async editarReserva(req, res) {
        try {
            const reservaEditada = await ReservaService.editarReserva(req.params.id, req.body);

            res.status(200).send(reservaEditada);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async deletarReserva(req, res) {
        try {
            const reservaDeletada = await ReservaService.deletarReserva(req.params.id);

            res.status(200).send(reservaDeletada);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async alterarStatusReserva(req, res) {
        try {
            const novoStatus = await ReservaService.alterarStatusReserva(req.params.id, req.body);

            res.status(200).send(novoStatus);
        } catch (err) {
            res.status(404).send(err.message);
        }
    }
}

module.exports = ReservaController;