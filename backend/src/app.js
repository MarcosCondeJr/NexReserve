const express = require('express');
const app = express();
const UsuarioRouter = require('./routes/UsuarioRouter');
const ServicoRouter = require('./routes/ServicoRouter');
const ProfissionalRouter = require('./routes/ProfissionalRouter');

app.use(express.json());
app.use('/usuario', UsuarioRouter);
app.use('/servico', ServicoRouter);
app.use('/profissional', ProfissionalRouter);

module.exports = app;