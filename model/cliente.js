let mongoose = require("mongoose")

let cliente = new mongoose.Schema({
    nome: { type: String, required: true},
    local: String
})

module.exports = mongoose.model("Cliente", cliente);