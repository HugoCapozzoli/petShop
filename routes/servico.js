const express = require('express');

const router = express.Router(); 
const servicoController = require('../controller/servicoController.js');
const WithAuth = require('../middleware/auth.js');

router.post('/servico', servicoController.createServico);
router.post('/servico', (req, res) => {
    
    res.send("Serviço cadastrado!");
});
module.exports = router; 
