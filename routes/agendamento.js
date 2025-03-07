const express = require('express');
const router = express.Router();
const agendamentoController = require('../controller/agendamentoController.js')

// Falta deletar o agendamento
router.post('/agendamentos', agendamentoController.createAgendamento);
router.get('/agendamentos', agendamentoController.getAllAgendamentos);

module.exports = router;