import mongoose from 'mongoose';

const agendamento = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
  preferencia: String,
  pets: [{
    type: mongoose.Types.ObjectId,
    required: true,
  }],
  cliente: {
    type: mongoose.Types.ObjectId, required: true,
    ref: 'Cliente'
  },
  servico: {
    type: mongoose.Types.ObjectId, required: true,
    ref: 'Servico'
  }
});

// Especifica que o modelo deve usar a coleção "formdatamodels"
export default mongoose.model('Agendamento', agendamento);