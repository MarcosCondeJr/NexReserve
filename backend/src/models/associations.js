const Profissional = require('./Profissional');
const Servico = require('./Servico');

Profissional.hasMany(Servico, {
  foreignKey: 'id_profissional',
  as: 'servicos'
});

Servico.belongsTo(Profissional, {
  foreignKey: 'id_profissional',
  as: 'profissionais'
});

module.exports = { Profissional, Servico };