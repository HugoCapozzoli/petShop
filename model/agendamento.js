import mongoose from 'mongoose';

const agendamento = new mongoose.Schema({
  data: {
    type: Int,
    required: true,
  },
  preferencia: {
    type: String,
    required: true,
    unique: true,
  },
  pets: {
    type: String,
    required: true,
  },
});

// Especifica que o modelo deve usar a coleção "formdatamodels"
export default mongoose.model('Agendamento', agendamento, 'agendamento');