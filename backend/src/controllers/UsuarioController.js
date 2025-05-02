const UsuarioService = require('../services/UsuarioService');

const UsuarioController = {
    async listarUsuarios(req, res) {
        try {
            const usuarios = await UsuarioService.listarUsuarios();
            res.status(200).json({usuarios});

        } catch (err) {
            res.send(404).json({Error: err.message})
        }
    }
}

module.exports = UsuarioController;