const express = require('express');
const app = express();
const UsuarioRouter = require('./routes/UsuarioRouter');

app.use(express.json());
app.use('/usuario', UsuarioRouter);

module.exports = app;