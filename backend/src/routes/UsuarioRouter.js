const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/UsuarioController');

router.get('/', UsuarioController.listarUsuarios);

module.exports = router;