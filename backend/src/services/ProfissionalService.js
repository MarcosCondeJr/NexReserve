const Profissional = require('../models/Profissional');

class ProfissionalService {
    static async listarProfissionais() {
        return await Profissional.findAll();
    }
}

module.exports = ProfissionalService;