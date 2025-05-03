const ServicoService = require('../services/ServicoService');

const ServicoController = {
    async listarServicos(req, res) {
        try {
            const servicos = await ServicoService.listarServicos();

            res.status(200).json(servicos);
        } catch (err) {
            res.status(404).json(err.message);
        }
    },

    async buscarServicoPorId(req, res) {
        try {
            const servico = await ServicoService.buscarServicoPorId(req.params.id);

            res.status(200).json(servico);
        } catch (err) {
            res.status(404).send(err.message);
        }
    }
}

module.exports = ServicoController;