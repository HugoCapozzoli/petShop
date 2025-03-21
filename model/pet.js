const mongoose = require("mongoose");

let petSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    porte: { type: String, required: true },
    alergia: { type: String, required: false, default: '' },
    observacao: { type: String, default: '' } ,
    agendamento: {type: mongoose.Types.ObjectId, ref: "Agendamento"}
});

module.exports = mongoose.model("Pet", petSchema);