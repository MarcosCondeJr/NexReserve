const { Profissional } = require('../models/index');

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
}

module.exports = ProfissionalService;