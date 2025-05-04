const express = require('express');
const app = express();
const UsuarioRouter = require('./routes/UsuarioRouter');
const ServicoRouter = require('./routes/ServicoRouter');
const ProfissionalRouter = require('./routes/ProfissionalRouter');
const ReservaRouter = require('./routes/ReservaRouter');

app.use(express.json());
app.use('/usuario', UsuarioRouter);
app.use('/servico', ServicoRouter);
app.use('/profissional', ProfissionalRouter);
app.use('/reserva', ReservaRouter);

module.exports = app;