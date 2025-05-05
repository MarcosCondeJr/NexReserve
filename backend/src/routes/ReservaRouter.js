const express = require('express');
const router = express.Router();
const ReservaController = require('../controllers/ReservaController');

router.get('/', ReservaController.listarReservas);
router.get('/:id', ReservaController.buscarReservaPorId);
router.post('/', ReservaController.cadastrarReserva);
router.delete('/:id', ReservaController.deletarReserva);
router.put('/:id', ReservaController.editarReserva);

module.exports = router;