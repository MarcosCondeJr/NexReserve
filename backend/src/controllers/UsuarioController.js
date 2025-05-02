const UsuarioService = require('../services/UsuarioService');

const UsuarioController = {
    async listarUsuarios(req, res) {
        try {
            const usuarios = await UsuarioService.listarUsuarios();
            res.status(200).json({usuarios});

        } catch (err) {
            res.send(404).json({Error: err.message})
        }
    },

    async buscarUsuarioPorId(req, res) {
        try {
            const idUsuario = req.params.id;

            const usuario = await UsuarioService.buscarUsuarioPorId(idUsuario);

            if (!usuario) return res.status(404).send(`Não foi possivel encontrar o Usuário com o id ${idUsuario}`)

            res.status(200).json({usuario});
        } catch (err) {
            res.status(404).json({Error: err.message})
        }
    }
}

module.exports = UsuarioController;