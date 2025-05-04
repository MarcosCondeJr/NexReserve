const express = require('express');
const router = express.Router();
const ProfissionalController = require('../controllers/ProfissionalController');

router.get('/', ProfissionalController.listarProfissionais);
router.get('/:id', ProfissionalController.buscarProfissionalPorId);
router.post('/', ProfissionalController.cadastrarProfissional);
router.delete('/:id', ProfissionalController.deletarProfissional);

module.exports = router;