let mongoose = require("mongoose")

let petSchema = new mongoose.Schema({
    nome: { type: String, required: true},
    porte: { type: String, required: true},
    alergia: { type: String, required: true},
    observacao: {type: String}
})

module.exports = mongoose.model("Pet", petSchema);