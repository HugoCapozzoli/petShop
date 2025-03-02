const { buildSchema } = require('graphql')

const schema = buildSchema(`
    type Cliente {
        id: String!
        nome: String!
        local: String
    }

    type Query {
        cliente(id: String!): Cliente
        clientes: [Cliente]
    }

    type Mutation {
        createCliente(nome: String!, local: String): Cliente
    }
`)

module.exports = schema