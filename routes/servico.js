const express = require('express');

const router = express.Router(); 
const servicoController = require('../controller/servicoController.js');

// falta buscar, deletar e atualizar o cliente

router.post('/servico', servicoController.createServico);

module.exports = router; 
