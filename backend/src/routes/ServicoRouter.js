const ServicoController = require('../controllers/ServicoController');
const express = require('express');
const router = express.Router();

router.get('/', ServicoController.listarServicos);
router.get('/:id', ServicoController.buscarServicoPorId);
router.post('/', ServicoController.cadastrarServico);
router.put('/:id', ServicoController.editarServico);
router.delete('/:id', ServicoController.deletarServico);
router.patch('/:id/desativar', ServicoController.desativarServico);
router.patch('/:id/reativar', ServicoController.reativarServico);

module.exports = router;