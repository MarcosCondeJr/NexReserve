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

    static async cadastrarUsuario(dadosUsuario) {
        const { nmUsuario, emailUsuario, senhaUsuario, tpUsuario, telefoneUsuario } = dadosUsuario;

        this.validarDadosUsuario(dadosUsuario);

        if (tpUsuario !== TIPO_USUARIO.ADMIN && tpUsuario !== TIPO_USUARIO.USUARIO) {
            throw new Error('Informe um Tipo de usuário válido!');
        }

        const ramdomSalt = nodeCrypto.randomInt(10, 16);
        const senhaHash = await bcrypt.hash(senhaUsuario, ramdomSalt);

        return await Usuario.create({
            nm_usuario: nmUsuario, 
            email_usuario: emailUsuario, 
            senha_usuario: senhaHash, 
            tp_usuario: tpUsuario,
            telefone_usuario: telefoneUsuario
        });
    }

    static async editarUsuario(idUsuario, dadosUsuario) {
        const usuario = await Usuario.findByPk(idUsuario);
        const { nmUsuario, emailUsuario, senhaUsuario, tpUsuario, telefoneUsuario } = dadosUsuario;

        if (!usuario) {
            throw new Error(`Não foi possivel encontrar o Usuário com o id ${idUsuario}`);
        }

        this.validarDadosUsuario(dadosUsuario);

        const ramdomSalt = nodeCrypto.randomInt(10, 16);
        const senhaHash = await bcrypt.hash(senhaUsuario, ramdomSalt);
        console.log(telefoneUsuario);

        usuario.nm_usuario = nmUsuario, 
        usuario.email_usuario = emailUsuario, 
        usuario.senha_usuario = senhaHash, 
        usuario.tp_usuario = tpUsuario,
        usuario.telefone_usuario = telefoneUsuario

        return await usuario.save();
    }

    static async deletarUsuario(idUsuario) {
        const usuario = await Usuario.findByPk(idUsuario);

        if (!usuario) {
            throw new Error(`Não foi possivel encontrar o Usuário com o id ${idUsuario}`)
        } 

        return await usuario.destroy();
    }

    static async validarDadosUsuario(dadosUsuario) {
        const { nmUsuario, emailUsuario, senhaUsuario, tpUsuario, telefoneUsuario } = dadosUsuario;

        if (!nmUsuario) {
            throw new Error('É necessário informar o nome do usuário');
        } 
        
        if (!emailUsuario) {
            throw new Error('É necessário informar o Email');
        }
        
        if (!senhaUsuario) {
            throw new Error('É necessário informar uma senha para cadastrar');
        } 
        
        if (!tpUsuario) {
            throw new Error('É necessário informar o tipo do usuário');
        }

        if (!telefoneUsuario) {
            throw new Error('É necessário informar o telefone');
        }
    }
}

module.exports = UsuarioService;