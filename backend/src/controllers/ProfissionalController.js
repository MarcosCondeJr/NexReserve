const ProfissionalService = require('../services/ProfissionalService');

const ProfissionalController = {
    async listarProfissionais(req, res) {
        try {
            const profissionais = await ProfissionalService.listarProfissionais()
            res.status(200).send(profissionais);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async buscarProfissionalPorId(req, res) {
        try {
            const profissional = await ProfissionalService.buscarProfissionalPorId(req.params.id);
            res.status(200).send(profissional);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async cadastrarProfissional(req, res) {
        try {
            const profissionalNovo = await ProfissionalService.cadastrarProfissional(req.body);

            res.status(201).send(profissionalNovo);
        } catch (err) {
            res.status(404).send(err.message);
        }
    }
}

module.exports = ProfissionalController;