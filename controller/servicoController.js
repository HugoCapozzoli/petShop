const servicoModel = require('../model/servico.js');

// Criar um novo serviço
const createServico = async (req, res) => {
    try {
        const { nome, valor, duracaoMaxMinutos } = req.body;
        const newServico = new servicoModel({ nome, valor, duracaoMaxMinutos });
        await newServico.save();
        res.status(201).json({ 
            message: "Serviço criado com sucesso!!",
            servico: newServico 
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Pega todos os ID
const getAllServicos = async (req, res) => {
    try {
        const servicos = await servicoModel.find();
        res.status(200).json({
            message: "Aqui estão todos os serviços cadastrados",
            servicos
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Procura por ID
const getServicoById = async (req, res) => {
    try {
        const servico = await servicoModel.findById(req.params.id);
        if (!servico) {
            return res.status(404).json({ message: 'Serviço não encontrado' });
        }

        res.status(200).json({ 
            message: "Serviço encontrado!!",
            servico 
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// att por ID
const updateServico = async (req, res) => {
    try {
        const { nome, valor, duracaoMaxMinutos } = req.body;
        const servico = await servicoModel.findByIdAndUpdate(
            req.params.id,
            { nome, valor, duracaoMaxMinutos },
            { new: true } //* Retorna o documento atualizado
        );
        
        if (!servico) {
            return res.status(404).json({ message: 'Serviço não encontrado' });
        }

        res.status(200).json({ 
            message: "Serviço atualizado com sucesso!!",
            servico 
        });
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
