const clienteModel = require('../model/cliente');

const createCliente = async (req, res) => {
    const { nome, local } = req.body;
    
    try {
        const novoCliente = new clienteModel({ nome, local });
        await novoCliente.save();

        res.status(201).json({
            message: "Cliente cadastrado com sucesso!",
            cliente: novoCliente
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar cliente", error });
    }
};

const getAllClientes = async (req, res) => {
    try {
        const clientes = await clienteModel.find(); 
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar clientes", error });
    }
};

const deleteCliente = async (req, res) => {
    const { id } = req.params;

    try {
        const cliente = await clienteModel.findById(id);
        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado!" });
        }

        await clienteModel.deleteOne({ _id: id });
        res.status(200).json({ message: "Cliente removido com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao remover cliente", error });
    }
};

const editCliente = async (req, res) => {
    const { id } = req.params;
    const { nome, local } = req.body;

    try {
        const cliente = await clienteModel.findByIdAndUpdate(id, { nome, local }, { new: true });

        if (!cliente) {
            return res.status(404).json({ message: "Cliente não encontrado!" });
        }

        res.status(200).json({
            message: "Cliente atualizado com sucesso!",
            cliente
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar cliente", error });
    }
};

module.exports = {createCliente, getAllClientes, deleteCliente, editCliente};
