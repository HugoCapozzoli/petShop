const express = require('express');
const router = express.Router(); 


router.post('/servico', (req, res) => {
    
    res.send("Serviço cadastrado!");
});

module.exports = router; 
