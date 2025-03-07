const express = require('express');
const controller = require('../controller/clienteController');
const router = express.Router();

router.route("/cliente")
    .post(controller.createCliente)  
    .get(controller.getAllClientes); 

router.route("/cliente/:id")
    .put(controller.editCliente)     
    .delete(controller.deleteCliente);

module.exports = router;
