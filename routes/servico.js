const express = require('express');

const router = express.Router(); 
const servicoController = require('../controller/servicoController.js');

// atualizado, falta testar

router.post('/servico', servicoController.createServico);
router.get('/servico', servicoController.getAllServicos);
router.get('/servico/:id', servicoController.getServicoById);
router.put('/servico/:id', servicoController.updateServico);
router.delete('/servico/:id', servicoController.deleteServico);
router.patch('/servico/:id', servicoController.setAgendamento);

module.exports = router; 
