let mongoose = require("mongoose")

let servicoSchema = new mongoose.Schema({
    name: { type: string, required: true},
    valor: { type: Number, required: true},
    duracaoMaxMinutos: Number,
})

module.exports = mongoose.model("Servico", servicoSchema);
