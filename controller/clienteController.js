const clienteModel = require('../model/cliente')

const createCliente = async (req, res) => {
    const { nome, local } = req.body;
    
    const novoCliente = new clienteModel({ nome, local });
    await novoCliente.save()

    res.status(201).json(novoCliente)
}

module.exports = {
    createCliente
}