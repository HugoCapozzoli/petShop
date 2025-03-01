import Agendamento from '../model/Agendamento.js';

const createAgendamento = async (data, preferencia,pets ) => {
    const newAgendamento = new Agendamento ({
        data, 
        preferencia,
        pets

    });

    await newAgendamento.save();
    return newAgendamento;
};

const getAllAgendamentos = async () => {
    return await Agendamento.find();
};



module.exports = { createAgendamento, getAllAgendamentos};