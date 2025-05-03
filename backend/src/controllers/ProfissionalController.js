const ProfissionalService = require('../services/ProfissionalService');

const ProfissionalController = {
    async listarProfissionais(req, res) {
        try {
            const profissional = await ProfissionalService.listarProfissionais()
            res.status(200).send(profissional);
        } catch (err) {
            res.status(404).send(err.message);
        }
    }
}

module.exports = ProfissionalController;