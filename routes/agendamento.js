const express = require('express');
const router = express.Router();
const agendamentoController = require('../controller/agendamentoController.js')
const WithAuth = require('../middleware/auth.js');

// Falta deletar o agendamento
router.post('/agendamentos', agendamentoController.createAgendamento);
router.get('/agendamentos', WithAuth, agendamentoController.getAllAgendamentos);

module.exports = router;