const Profissional = require('./Profissional');
const Servico = require('./Servico');
const Reserva = require('./Reserva');
const Usuario = require('./Usuario');

Profissional.hasMany(Servico, {
  foreignKey: 'id_profissional',
  as: 'servicos'
});

Servico.belongsTo(Profissional, {
  foreignKey: 'id_profissional',
  as: 'profissional'
});

Reserva.belongsTo(Servico, {
    foreignKey: 'id_servico',
    as: 'servico'
});

Reserva.belongsTo(Usuario, {
    foreignKey: 'id_usuario',
    as: 'usuario'
});

module.exports = { Profissional, Servico, Reserva };