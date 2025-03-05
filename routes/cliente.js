const express = require('express');
const controller = require('../controller/clienteController');
const router = express.Router();
const WithAuth = require('../middleware/auth.js');

router.route("/cliente")
    .post(controller.createCliente)  
    .get(WithAuth, controller.getAllClientes); 

router.route("/cliente/:id")
    .put(controller.editCliente)     
    .delete(controller.deleteCliente);

module.exports = router;
