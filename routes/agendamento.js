const express = require('express')
const router = express.Router();
const agendamentoController = require('../controller/agendamentoController.js')

router.post(agendamentoController.createAgendamento);
router.get('/agendamentos', agendamentoController.getAllAgendamentos);

module.exports = router