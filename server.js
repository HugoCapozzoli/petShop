const app = require('express')();
const bodyParser = require('body-parser')
require('./db/db.js')

const petRouter = require('./routes/pet.js')
const agendamento = require('./routes/agendamento.js')
const cliente = require('./routes/cliente.js')
const servico = require('./routes/servico.js')

app.use(bodyParser.json())
app.use("/api", cliente)
app.use("/api", servico)
app.use("/api", agendamento)
app.use("/api", petRouter)
app.get('/', (req, res) => {
    res.send("Oh macho, a API começa no /api !! (suspira)")
})

app.listen(8080, () => {
    console.log('Server is running on port http://localhost:8080')
})