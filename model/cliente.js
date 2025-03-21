let mongoose = require("mongoose");
const bcrypt = require('bcrypt');

let cliente = new mongoose.Schema({
    nome: { type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    local: {type: String},
    agendamento: {type: mongoose.Types.ObjectId, ref: "Agendamento"}
});

// Usado para hashficar a senha antes mesmo do cliente ser salvo
cliente.pre('save', function (next) {
    if(this.isNew || this.isModified('password')) {
        bcrypt.hash(this.password, 10, (err, hashedPassword) => {
            if (err) next(err);
            else {
                this.password = hashedPassword;
                next();
            }
        })
    }
});

// Usado para verificar se a senha dada pelo usuário é a mesma que está armazenada em formato Hash (Processo anterior)
cliente.methods.isCorrectPassword = function (password, callback) {
    bcrypt.compare(password, this.password, (err, same) => {
        if (err) callback(err);
        else {
            callback(null, same);
        }
    })
};

module.exports = mongoose.model("Cliente", cliente);