let mongoose = require("mongoose")

let petSchema = new mongoose.Schema({
    name: { type: string, required: true},
    porte: { type: string, required: true},
    alergia: { type: string, required: true},
    observacao: { type: string},
})

module.exports = mongoose.model("pet", petSchema);