const Profissional = require('./Profissional');
const Servico = require('./Servico');
const ProfissionalServico = require('./ProfissionalServico');

Profissional.belongsToMany(Servico, {
  through: ProfissionalServico,
  foreignKey: 'id_profissional',
  otherKey: 'id_servico'
});

Servico.belongsToMany(Profissional, {
  through: ProfissionalServico,
  foreignKey: 'id_servico',
  otherKey: 'id_profissional'
});

module.exports = {
  Profissional,
  Servico,
  ProfissionalServico
};
