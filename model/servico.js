let mongoose = require("mongoose")

let servicoSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    valor: { type: Number, required: true},
    duracaoMaxMinutos: Number,
    agendamento: {type: mongoose.Types.ObjectId, ref: "Agendamento"}
})

module.exports = mongoose.model("Servico", servicoSchema);
