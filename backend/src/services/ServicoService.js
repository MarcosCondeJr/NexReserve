const Servico = require('../models/Servico');

class ServicoService {
    static async listarServicos() {
        return Servico.findAll();
    }
}

module.exports = ServicoService;