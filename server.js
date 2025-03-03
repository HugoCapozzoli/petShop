const app = require('express')();
const bodyParser = require('body-parser')
require('./db/db.js')

const petRouter = require('./routes/pet.js')
const agendamento = require('./routes/agendamento.js')
const cliente = require('./routes/cliente.js')
const servico = require('./routes/servico.js');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const resolvers = require('./revolvers/revolvers.js');

app.use(bodyParser.json())
app.use("/api", cliente)
app.use("/api", servico)
app.use("/api", agendamento)
app.use("/api", petRouter)
app.get('/', (req, res) => {
    res.send("Oh macho, a API começa no /api !! (suspira)")
})

/* O schema eh o coracao do graphql, porem ha um meio de gerar automaticante
porem esse codigo eh uma solucao simples */
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true      // telinha para testar
}))

app.listen(8080, () => {
    console.log('Servidor rodando na porta http://localhost:8080')
})