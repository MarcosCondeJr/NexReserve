const UsuarioService = require('../services/UsuarioService');

const UsuarioController = {
    async listarUsuarios(req, res) {
        try {
            const usuarios = await UsuarioService.listarUsuarios();
            res.status(200).json({usuarios});

        } catch (err) {
            res.send(404).json(err.message)
        }
    },

    async buscarUsuarioPorId(req, res) {
        try {
            const idUsuario = req.params.id;

            const usuario = await UsuarioService.buscarUsuarioPorId(idUsuario);

            if (!usuario) return res.status(404).send(`Não foi possivel encontrar o Usuário com o id ${idUsuario}`)

            res.status(200).json({usuario});
        } catch (err) {
            res.status(404).json(err.message)
        }
    },

    async cadastrarUsuario(req, res) {
        try {
            const novoUsuario = await UsuarioService.cadastrarUsuario(req.body);

            res.status(201).send(novoUsuario);
        } catch (err) {
            res.status(404).json(err.message);
        }
    },

    async editarUsuario(req, res) {
        try {
            const usuarioEditado = await UsuarioService.editarUsuario(req.params.id, req.body);

            res.status(200).send(usuarioEditado);
        } catch (err) {
            res.status(404).send(err.message);
        }
    },

    async deletarUsuario(req, res) {
        try {
            const usuarioDeletado = await UsuarioService.deletarUsuario(req.params.id);

            res.status(200).send("Usuário deletado!");
        } catch (err) {
            res.status(404).send(err.message)
        }
    }
}

module.exports = UsuarioController;