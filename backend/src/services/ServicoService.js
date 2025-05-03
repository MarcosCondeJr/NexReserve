const Servico = require('../models/Servico');

class ServicoService {
    static async listarServicos() {
        return await Servico.findAll();
    }

    static async buscarServicoPorId(idServico) {
        const servico = await Servico.findByPk(idServico);

        if (!servico) {
            throw new Error(`Serviço não encontrado!`);
        }

        return servico;
    }
}

module.exports = ServicoService;