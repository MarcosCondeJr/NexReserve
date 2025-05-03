const express = require('express');
const app = express();
const UsuarioRouter = require('./routes/UsuarioRouter');
const ServicoRouter = require('./routes/ServicoRouter');

app.use(express.json());
app.use('/usuario', UsuarioRouter);
app.use('/servico', ServicoRouter);

module.exports = app;