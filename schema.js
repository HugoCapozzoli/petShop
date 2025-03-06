const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Agendamento {
        id: String!
        data: String!
        preferencia: String
        pets: [Pet!]
        cliente: Cliente!
        servico: Servico
    }

    type Pet {
        id: String!
        nome: String!
        porte: String
        alergia: String
        observacao: String
    }

    type Servico {
        id: String!
        nome: String!
        valor: Float!
        duracao: Int
    }

    type Cliente {
        id: String!
        nome: String!
        local: String
    }

    type Query {
        agendamentos: [Agendamento]
        agendamento(id: String!): Agendamento
    }

    type Mutation {
        createAgendamento(
            data: String!,
            preferencia: String,
            clienteId: String,
            petsId: [String],
            servicoId: String
        ): Agendamento!
    }
`)

module.exports = schema