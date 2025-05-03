const { DataTypes, Mode, Model } = require('sequelize');
const sequelize = require('../config/database');
const Servico = require('./Servico');
const ProfissionalServico = require('./ProfissionalServico');

class Profissional extends Model {}

Profissional.init({
    id_profissional: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nm_profissional: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    email_profissional: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    telefone_profissional: {
        type: DataTypes.STRING(20),
        allowNull: false
    }}, {
        sequelize,
        modelName: 'Profissional',
        tableName: 'profissionais',
        timestamps: true
});

Profissional.belongsToMany(Servico, {
    through: ProfissionalServico,
    foreignKey: 'id_profissional',
    otherKey: 'id_servico'
});

module.exports = Profissional;