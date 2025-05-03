const ServicoController = require('../controllers/ServicoController');
const express = require('express');
const router = express.Router();

router.get('/', ServicoController.listarServicos);

module.exports = router;