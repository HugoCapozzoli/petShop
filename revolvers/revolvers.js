const clienteModel = require('../model/cliente.js')
const agendamentoModel = require('../model/agendamento.js')
const petModel = require('../model/pet.js')
const servicoModel = require('../model/servico.js')

// Tratamento de ids de clientes, pets, servico
const pesquisaById = async (agendamento) => {
    const cliente = await clienteModel.findById(agendamento.cliente)
    const pets = await petModel.find({ _id: { $in: agendamento.pets } })
    const servico = await petModel.findById(agendamento.servico)

    return {
        id: agendamento.id,
        cliente,
        pets,
        servico,
        data: agendamento.data,
        preferencia: agendamento.preferencia
    }
}

const resolvers = {
    updateAgendamento: async ({ id, data, preferencia, clienteId, petsId, servicoId }) => {
        // verificar se os campos de cliente, pets e servicos tem os ids corretos
        const agendamentoSaved = await agendamentoModel.findByIdAndUpdate(
            id,
            { data, preferencia, cliente: clienteId, pets: petsId, servico: servicoId },
            { new: true }
        )

        return await pesquisaById(agendamentoSaved)
    },
    createAgendamento: async ({ data, preferencia, clienteId, petsId, servicoId }) => {
        // verificar se os campos de cliente, pets e servicos tem os ids corretos
        const agendamentoNew = await agendamentoModel({
            data,
            preferencia,
            cliente: clienteId,
            pets: petsId,
            servico: servicoId
        })
        await agendamentoNew.save()

        return await pesquisaById(agendamentoNew)
    },
    agendamento: async ({ id }) => {
        const agendamento = await agendamentoModel.findById(id)

        // Aqui foi um tanto complicado
        // pois a solucao nao vem apenas retornando os valores assim que recebo
        // tive que guardar em uma variavel diferente, para todos os dados sejam
        // buscados e pesquisados para poder retorna-los
        return await pesquisaById(agendamento)

    },
    agendamentos: async () => {
        const agendamentos = await agendamentoModel.find()

        /* Mesma situacao com a de cima,
        so que aqui tenho uma lista de agendamentos que serao 'processados' */
        return agendamentos.map(async agendamento => {
            return await pesquisaById(agendamento)
        })
    }
}

module.exports = resolvers