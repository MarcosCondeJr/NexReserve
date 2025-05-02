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

    static async cadastrarUsuario(dados) {
        const { nmUsuario, emailUsuario, senhaUsuario, tpUsuario } = dados

        if (!nmUsuario) {
            throw new Error('É necessário informar o nome do usuário');
        } else if (!emailUsuario) {
            throw new Error('É necessário informar o Email');
        } else if (!senhaUsuario) {
            throw new Error('É necessário informar uma senha para cadastrar');
        } else if (!tpUsuario) {
            throw new Error('É necessário informar o tipo do usuário');
        }

        if (tpUsuario !== TIPO_USUARIO.ADMIN && tpUsuario !== TIPO_USUARIO.USUARIO) {
            throw new Error('Informe um Tipo de usuário válido!');
        }

        const ramdomSalt = nodeCrypto.randomInt(10, 16);
        const senhaHash = await bcrypt.hash(senhaUsuario, ramdomSalt, )

        return await Usuario.create({nm_usuario: nmUsuario, email_usuario: emailUsuario, senha_usuario: senhaHash, tp_usuario: tpUsuario});
    }

    static async deletarUsuario(idUsuario) {
        const usuario = await Usuario.findByPk(idUsuario);

        if (!usuario) {
            throw new Error(`Não foi possivel encontrar o Usuário com o id ${idUsuario}`)
        } 

        return await usuario.destroy();
    }
}

module.exports = UsuarioService;