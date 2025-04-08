let mongoose = require('mongoose');

const server = 'localhost:27017'; // COLOQUE O NOME DO SEU SERVIDOR DO BANCO DE DADOS
const database = 'petShop';      // COLOQUE O NOME DO SEU BANCO DE DADOS

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(`mongodb://${server}/${database}`)
    .then(() => {
      console.log('Database connection successful');
    })
    .catch(err => {
      console.error('Database connection error', err); 
      mongoose.connect(`mongodb+srv://gigliarlygonzaga:Marcelinog16$@cluster0.qlvnssy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
      .then(() => {
        console.log("Conexao online bem sucessedida")
      })
    });
  }
}

module.exports = new Database();
