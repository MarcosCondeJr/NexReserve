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
    },

    async deletarProfissional(req, res) {
        try {
            const profissionalDeletado = await ProfissionalService.deletarProfissional(req.params.id);

            res.status(201).send(profissionalDeletado);
        } catch (err) {
            res.status(404).send(err.message); 
        }
    },

    async editarProfissional(req, res) {
        try {
            const profissional = await ProfissionalService.editarProfissional(req.params.id, req.body);

            res.status(200).send(profissional);
        } catch (err) {
            res.status(404).send(err.message); 
        }
    }
}

module.exports = ProfissionalController;