const Usuario = require('../models/Usuario');
const bcrypt = require('bcrypt');
const nodeCrypto = require('node:crypto');
const TIPO_USUARIO = require('../enums/tipo_usuario');

class UsuarioService {
    static async listarUsuarios() {
        return await Usuario.findAll();
    }

    static async buscarUsuarioPorId(idUsuario) {
        return await Usuario.findByPk(idUsuario);
    }
}

module.exports = UsuarioService;