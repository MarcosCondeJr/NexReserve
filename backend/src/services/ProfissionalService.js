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
}

module.exports = ProfissionalService;