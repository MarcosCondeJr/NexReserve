const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./Usuario');

class Servico extends Model {}

Servico.init({
    id_servico: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    nm_servico: {
    type: DataTypes.STRING(100),
    allowNull: false
    },
    ds_servico: {
    type: DataTypes.TEXT,
    allowNull: false
    },
    vl_servico: {
    type: DataTypes.DECIMAL,
    allowNull: false
    },
    ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
    },
    duracao_minutos: {
    type: DataTypes.INTEGER,
    allowNull: false,
    }}, {
        sequelize,
        timestamps: true
});

module.exports = Servico;