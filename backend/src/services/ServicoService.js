const Servico = require('../models/Servico');

class ServicoService {
    static async listarServicos() {
        return await Servico.findAll();
    }
}

module.exports = ServicoService;