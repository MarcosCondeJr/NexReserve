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

    static async cadastrarServico(dadosServico) {
        const { nmServico, dsServico, vlServico, duracaoMinutos } = dadosServico;

        if (!nmServico) {
            throw new Error('É necessário informar o nome do serviço');
        } else if (!dsServico) {
            throw new Error('É necessário informar a descrição');
        } else if (!vlServico || isNaN(vlServico)) {
            throw new Error('É necessário informar o valor do serviço corretamente');
        } else if (!duracaoMinutos || isNaN(duracaoMinutos)) {
            throw new Error('É necessário informar a duração do serviço corretamente');
        }

        return await Servico.create({
            nm_servico: nmServico,
            ds_servico: dsServico,
            vl_servico: vlServico,
            ativo: true,
            duracao_minutos: duracaoMinutos
        });
    }
}

module.exports = ServicoService;