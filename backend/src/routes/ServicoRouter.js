const ServicoController = require('../controllers/ServicoController');
const express = require('express');
const router = express.Router();

router.get('/', ServicoController.listarServicos);
router.get('/:id', ServicoController.buscarServicoPorId);
router.post('/', ServicoController.cadastrarServico);

module.exports = router;