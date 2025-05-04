const { Servico } = require('../models/associations');

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
        const { nmServico, dsServico, vlServico, duracaoMinutos, idProfissional } = dadosServico;

        if (!nmServico) {
            throw new Error('É necessário informar o nome do serviço');
        } else if (!dsServico) {
            throw new Error('É necessário informar a descrição');
        } else if (!vlServico || isNaN(vlServico)) {
            throw new Error('É necessário informar o valor do serviço corretamente');
        } else if (!duracaoMinutos || isNaN(duracaoMinutos)) {
            throw new Error('É necessário informar a duração do serviço corretamente');
        } else if (!idProfissional || isNaN(idProfissional)) {
            throw new Error('É necessário informar o profissional');
        }

        return await Servico.create({
            nm_servico: nmServico,
            ds_servico: dsServico,
            vl_servico: vlServico,
            ativo: true,
            duracao_minutos: duracaoMinutos,
            id_profissional: idProfissional
        });
    }

    static async editarServico(idServico, dadosServico) {
        const servico = await Servico.findByPk(idServico);
        const { nmServico, dsServico, vlServico, duracaoMinutos, idProfissional } = dadosServico;

        if (!servico) {
            throw new Error(`Serviço não encontrado!`);
        }

        if (!nmServico) {
            throw new Error('É necessário informar o nome do serviço');
        } else if (!dsServico) {
            throw new Error('É necessário informar a descrição');
        } else if (!vlServico || isNaN(vlServico)) {
            throw new Error('É necessário informar o valor do serviço corretamente');
        } else if (!duracaoMinutos || isNaN(duracaoMinutos)) {
            throw new Error('É necessário informar a duração do serviço corretamente');
        } else if (!idProfissional || isNaN(idProfissional)) {
            throw new Error('É necessário informar o profissional');
        }

        servico.nm_servico = nmServico;
        servico.ds_servico = dsServico;
        servico.vl_servico = vlServico;
        servico.duracaoMinutos = duracaoMinutos;
        servico.id_profissional = idProfissional;

        return await servico.save();
    }

    static async deletarServico(idServico) {
        const servico = await Servico.findByPk(idServico);

        if (!servico) {
            throw new Error(`Serviço não encontrado!`);
        }

        return await servico.destroy();
    }

    static async desativarServico(idServico) {
        const servico = await Servico.findByPk(idServico);

        if (!servico) {
            throw new Error('Serviço não encontrado!');
        }

        if (servico.ativo == false) {
            throw new Error('Este serviço já está desativado!');
        }

        servico.ativo = false;

        return await servico.save();
    }

    static async reativarServico(idServico) {
        const servico = await Servico.findByPk(idServico);

        if (!servico) {
            throw new Error('Serviço não encontrado!');
        }

        if (servico.ativo == true) {
            throw new Error('Este serviço já está ativo!');
        }

        servico.ativo = true;

        return await servico.save();
    }
}

module.exports = ServicoService;