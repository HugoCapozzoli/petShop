const agendamentoModel = require('../model/agendamento.js')
const petModel = require('../model/pet.js')
const clienteModel = require('../model/cliente.js')
const servicoModel = require('../model/servico.js')

// {
//     data: String,
//     preferencia: String,
//     pets: [{
//         nome: String,
//         porte: String,
//         alergia: String,
//         observacao: String,
//     }],
//     cliente: {
//         nome: String,
//         local: String
//     },
//     servico: {
//         nome: String,
//         preco: Number,
//         duracao: Number
//     }
// };

const getClientId = async (cliente) => {
    const { nome, local } = cliente
    const clienteSaved = new clienteModel({ nome, local })

    return (await clienteSaved.save()).id
}

const getServicoId = async (servico) => {
    const { nome, valor, duracao } = servico
    const servicoSaved = new servicoModel({ nome, valor, duracaoMaxMinutos: duracao })

    return (await servicoSaved.save()).id
}

const getPetsId = async (pets) => {
    const petsId = []
    
    pets.map(async pet => {
        const { nome, porte, alergia, observacao } = pet

        const petSaved = new petModel({ nome, porte, alergia, observacao })

        petsId.push((await petSaved.save()).id)
    })

    return petsId
}

const createAgendamento = async (req, res) => {
    // desejo transformar o valor de req.body para agendamento
    const { data, preferencia, pets, cliente, servico } = req.body;

    const petsId = await getPetsId(pets)
    const clientId = await getClientId(cliente)
    const servicoId = await getServicoId(servico)

    const agendamentoSaved = new agendamentoModel({
        data,
        preferencia,
        pets: petsId,
        cliente: clientId,
        servico: servicoId
    })

    await agendamentoSaved.save()

    res.status(200).json(agendamentoSaved);
};

const getAllAgendamentos = async () => {
    return await Agendamento.find();
};



module.exports = { createAgendamento, getAllAgendamentos };