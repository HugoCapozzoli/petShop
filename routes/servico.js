const express = require('express');

const router = express.Router(); 
const servicoController = require('../controller/servicoController.js');
const WithAuth = require('../middleware/auth.js');

// falta buscar, deletar e atualizar o cliente

router.post('/servico', servicoController.createServico);
// Essa requisicao nao faz sentido
router.post('/servico', (req, res) => {
    
    res.send("Serviço cadastrado!");
});
module.exports = router; 
