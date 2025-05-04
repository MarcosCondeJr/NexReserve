const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/ReservaController');

router.get('/', ReservaController.listarReservas);
router.post('/', ReservaController.cadastrarReserva);

module.exports = router;