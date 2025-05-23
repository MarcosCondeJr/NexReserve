const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Profissional = require('../models/Profissional');

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
    },
    id_profissional: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Profissional',
            key: 'id_profissional'
        }
    }}, {
        sequelize,
        timestamps: true,
        modelName: 'Servico',
        tableName: 'servicos',
});

module.exports = Servico;