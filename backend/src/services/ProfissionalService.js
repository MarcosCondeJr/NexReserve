const { Profissional }= require('../models/associations');

class ProfissionalService {
    static async listarProfissionais() {
        return await Profissional.findAll();
    }

    static async buscarProfissionalPorId(idProfissional) {
        const profissional = await Profissional.findByPk(idProfissional);

        if(!profissional) {
            throw new Error('Profissional não encontrado!');
        }

        return profissional;
    }

    static async cadastrarProfissional(dadosProfissional) {
        const { nmProfissional, emailProfissional, telefoneProfissional } = dadosProfissional;

        if (!nmProfissional) {
            throw new Error('É necessário informar o nome do Profissional!');
        } else if (!emailProfissional) {
            throw new Error('É necessário informar o email!');
        } else if (!telefoneProfissional || isNaN(telefoneProfissional)) {
            throw new Error('É necessário informar o telefone corretamente!');
        }

        return await Profissional.create({
            nm_profissional: nmProfissional,
            email_profissional: emailProfissional,
            telefone_profissional: telefoneProfissional
        });
    }

    static async deletarProfissional(idProfissional) {
        const profissional = await Profissional.findByPk(idProfissional);

        if (!profissional) {
            throw new Error('Profissional não encontrado!');
        }

        return await profissional.destroy();
    }

    static async editarProfissional(idProfissional, dadosProfissional) {
        const profissional = await Profissional.findByPk(idProfissional);
        const { nmProfissional, emailProfissional, telefoneProfissional } = dadosProfissional;

        if (!profissional) {
            throw new Error('Profissional não encontrado!');
        }

        if (!nmProfissional) {
            throw new Error('É necessário informar o nome do Profissional!');
        } else if (!emailProfissional) {
            throw new Error('É necessário informar o email!');
        } else if (!telefoneProfissional || isNaN(telefoneProfissional)) {
            throw new Error('É necessário informar o telefone corretamente!');
        }

        profissional.nm_profissional = nmProfissional;
        profissional.telefone_profissional = telefoneProfissional;
        profissional.email_profissional = emailProfissional;

        return await profissional.save();
    }
}

module.exports = ProfissionalService;