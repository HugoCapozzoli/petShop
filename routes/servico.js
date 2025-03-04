const express = require('express');
const router = express.Router;
const servicoController = require('../controller/servicoController.js');

router.post('/servico', servicoController.createServico);


module.exports = router