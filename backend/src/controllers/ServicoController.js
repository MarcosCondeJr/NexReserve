const ServicoService = require('../services/ServicoService');

const ServicoController = {
    async listarServicos(req, res) {
        try {
            const servicos = await ServicoService.listarServicos();

            res.status(200).json(servicos);
        } catch (err) {
            res.status(404).json(err.message);
        }
    }
}

module.exports = ServicoController;