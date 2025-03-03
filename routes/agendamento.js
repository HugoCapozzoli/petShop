const router = require('express').Router();
const controller = require('../controller/agendamentoController.js')

router.route('/agendamento')
    .post(controller.createAgendamento)

module.exports = router