const clienteModel = require('../model/cliente');

const createCliente = async (req, res) => {
    const { nome, email, password, local } = req.body;
    
    try {
        const novoCliente = new clienteModel({ nome, email, password, local });
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
    const { nome, email, password, local } = req.body;

    try {
        const cliente = await clienteModel.findByIdAndUpdate(id, { nome, email, password, local }, { new: true });

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

const setAgendamento = async (req, res) => {
    const { id } = req.params
    const { agendamentoId } = req.body


    try {
        const cliente = await clienteModel.findByIdAndUpdate(id, { agendamento: agendamentoId }, { new: true });

        res.status(200).json({ cliente })
    }catch (e) {
        res.status(500).json({ message: "Erro ao setar agendamento" }); 
    }

}

module.exports = {createCliente, getAllClientes, deleteCliente, editCliente, setAgendamento};
