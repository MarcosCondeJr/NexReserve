const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class ProfissionalServico extends Model {}

ProfissionalServico.init({
  id_profissionalservico: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  id_profissional: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_servico: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ProfissionalServico',
  tableName: 'profissional_servico',
  timestamps: false
});

module.exports = ProfissionalServico;
