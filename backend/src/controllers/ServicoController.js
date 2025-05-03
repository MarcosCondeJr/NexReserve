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
    },

    async cadastrarServico(req, res) {
        try {
            const servicoNovo = await ServicoService.cadastrarServico(req.body);

            res.status(201).json(servicoNovo);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async editarServico(req, res) {
        try {
            const servicoEditado = await ServicoService.editarServico(req.params.id, req.body);

            res.status(200).json(servicoEditado);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async deletarServico(req, res) {
        try {
            const servicoDeletado = await ServicoService.deletarServico(req.params.id);

            res.status(200).json(servicoDeletado);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async desativarServico(req, res) {
        try {
            const servicoDesativado = await ServicoService.desativarServico(req.params.id);

            res.status(200).send("Serviço Desativado com sucesso!");
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async reativarServico(req, res) {
        try {
            const servicoReativado = await ServicoService.reativarServico(req.params.id);

            res.status(200).send("Serviço Reativado com sucesso!");
        } catch (err) {
            res.status(404).send(err.message);
        }
    }
}

module.exports = ServicoController;