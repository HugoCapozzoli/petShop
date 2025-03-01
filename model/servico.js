let mongoose = require("mongoose")

let servicoSchema = new mongoose.Schema({
    name: { type: string, required: true},
    valor: { type: Number, required: true},
    duracaoMaxMinutos: { type: Number},
})

module.exports = mongoose.model("servico", servicoSchema);
