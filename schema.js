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
        servico(id: String!): Servico
        servicos: [Servico]
        agendamentos: [Agendamento]
        agendamento(id: String!): Agendamento
    }

    type Mutation {
        createServico(nome: String!, valor: Float!, duracao: String): Servico
    }
`)

module.exports = schema