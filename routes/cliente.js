const controller = require('../controller/clienteController');

const router = require('express').Router();

router.route("/cliente")
    .post(controller.createCliente)


module.exports = router