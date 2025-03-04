const express = require('express');
const controller = require('../controller/clienteController');

const router = express.Router();

router.route("/cliente")
    .post(controller.createCliente)  // Criar cliente
    .get(controller.getAllClientes); // Buscar todos os clientes

router.route("/cliente/:id")
    .put(controller.editCliente)     // Atualizar cliente
    .delete(controller.deleteCliente); // Deletar cliente

module.exports = router;
