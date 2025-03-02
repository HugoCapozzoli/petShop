const servicoModel = require('../model/servico.js')

const createServico = async (req, res) => {
    const { name, valor, duracaoMaxMinutos } = req.body
    const newServico = new servicoModel({ name, valor, duracaoMaxMinutos });
    await newServico.save();
    res.status(201).json(newServico);
}

module.exports = {
    createServico
}