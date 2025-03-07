const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const WithAuth = require('./middleware/auth.js');
require('./db/db.js');

const loginRoutes = require('./routes/auth.js');
const petRoutes = require('./routes/pet.js');
const agendamentoRoutes = require('./routes/agendamento.js');
const clienteRoutes = require('./routes/cliente.js');
const servicoRoutes = require('./routes/servico.js');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const resolvers = require('./revolvers/revolvers.js');

app.use(bodyParser.json());
app.use(WithAuth);

app.use("/api", loginRoutes);
app.use("/api", clienteRoutes);
app.use("/api", servicoRoutes);
app.use("/api", agendamentoRoutes);
app.use("/api", petRoutes);
app.get('/', (req, res) => {
    res.send("Oh macho, a API começa no /api !! (suspira)");
});

/* O schema eh o coracao do graphql, porem ha um meio de gerar automaticante
porem esse codigo eh uma solucao simples */
app.use("/graphql", graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true      // telinha para testar
}));

app.listen(8080, () => {
    console.log('Servidor rodando na porta http://localhost:8080')
});