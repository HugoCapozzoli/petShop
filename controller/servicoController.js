const servicoModel = require('../model/servico.js');

// Criar um novo serviço
const createServico = async (req, res) => {
    try {
        const { name, valor, duracaoMaxMinutos } = req.body;
        const newServico = new servicoModel({ name, valor, duracaoMaxMinutos });
        await newServico.save();
        res.status(201).json(newServico);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Pega todos os ID
const getAllServicos = async (req, res) => {
    try {
        const servicos = await servicoModel.find();
        res.status(200).json(servicos);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Procura por ID
const getServicoById = async (req, res) => {
    try {
        const servico = await servicoModel.findById(req.params.id);
        if (!servico) return res.status(404).json({ message: 'Serviço não encontrado' });
        res.status(200).json(servico);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// att por ID
const updateServico = async (req, res) => {
    try {
        const { name, valor, duracaoMaxMinutos } = req.body;
        const servico = await servicoModel.findByIdAndUpdate(
            req.params.id,
            { name, valor, duracaoMaxMinutos },
            { new: true } //* doc atualizado retorno
        );
        if (!servico) return res.status(404).json({ message: 'Serviço não encontrado' });
        res.status(200).json(servico);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//*  excluir serviço
const deleteServico = async (req, res) => {
    try {
        const servico = await servicoModel.findByIdAndDelete(req.params.id);
        if (!servico) return res.status(404).json({ message: 'Serviço não encontrado' });
        res.status(200).json({ message: 'Serviço deletado com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createServico,
    getAllServicos,
    getServicoById,
    updateServico,
    deleteServico
};
