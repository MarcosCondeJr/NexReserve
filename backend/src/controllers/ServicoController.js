const ServicoService = require('../services/ServicoService');

const ServicoController = {
    async listarServicos(req, res) {
        try {
            const servicos = ServicoService.listarServicos();

            res.status(404).json(servicos);
        } catch (err) {
            res.status(404).json(err.message);
        }
    }
}

module.exports = ServicoController;