const express = require('express');
const router = express.Router();
const ProfissionalController = require('../controllers/ProfissionalController');

router.get('/', ProfissionalController.listarProfissionais);

module.exports = router;