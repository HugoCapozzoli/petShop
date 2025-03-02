const clienteModel = require('../model/cliente.js')

const resolvers = {
    cliente: ({ id }) => clienteModel.findById(id),
    clientes: () => clienteModel.find(),
    createCliente: async ({ nome, local }) => {
        const novoCliente = new clienteModel({ nome, local })
        await novoCliente.save()

        return novoCliente
    }
}

module.exports = resolvers