const clienteModel = require('../model/cliente.js')
const agendamentoModel = require('../model/agendamento.js')
const petModel = require('../model/pet.js')
const servicoModel = require('../model/servico.js')

const resolvers = {
    servico: ({ id }) => servicoModel.findById(id),
    servicos: () => servicoModel.find(),
    createServico: async ({ nome, valor, duracao }) => {
        const servicoNovo = await servicoModel({ nome, valor, duracao })
        await servicoNovo.save()

        return servicoNovo
    },
    agendamento: async ({ id }) => {
        const agendamento = await agendamentoModel.findById(id)

        // Aqui foi um tanto complicado
        // pois a solucao nao vem apenas retornando os valores assim que recebo
        // tive que guardar em uma variavel diferente, para todos os dados sejam
        // buscados e pesquisados para poder retorna-los
        agendamento.cliente = await clienteModel.findById(agendamento.cliente)
        agendamento.servico = await servicoModel.findById(agendamento.servico)
        const pets = await petModel.find({ _id: { $in: agendamento.pets } })

        return {
            id: agendamento._id,
            cliente: agendamento.cliente,
            servico: agendamento.servico,
            pets,
            data: agendamento.data,
            preferencia: agendamento.preferencia
        }

    },
    agendamentos: async () => {
        const agendamentos = await agendamentoModel.find()

        /* Mesma situacao com a de cima,
        so que aqui tenho uma lista de agendamentos que serao 'processados' */
        return agendamentos.map(async agendamento => {
            agendamento.cliente = await clienteModel.findById(agendamento.cliente)
            agendamento.servico = await servicoModel.findById(agendamento.servico)
            const pets = await petModel.find({ _id: { $in: agendamento.pets } })

            return {
                id: agendamento._id,
                cliente: agendamento.cliente,
                servico: agendamento.servico,
                pets,
                data: agendamento.data,
                preferencia: agendamento.preferencia
            }
        })
    }
}

module.exports = resolvers