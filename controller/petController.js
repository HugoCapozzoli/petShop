const Pet = require('../model/pet.js'); 

const createPet = async (req, res) => {
    try {
        const { nome, porte, alergia, observacao } = req.body; 

        const newPet = new Pet({ nome, porte, alergia, observacao });
        await newPet.save();

        res.status(201).json({
            message: "Pet cadastrado com sucesso!",
            pet: newPet
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao cadastrar o pet.", error });
    }
};


const getAllPets = async (req, res) => {
    const pets = await Pet.find(); 
    res.status(200).json(pets);
};

const deletePet = async (req, res) => {
    const { id } = req.params;

    const pet = await Pet.findById(id);
    if (!pet) {
        return res.status(404).json({ message: "Pet não encontrado!" });
    }

    await Pet.deleteOne({ _id: id });
    res.status(200).json({ message: "Pet removido com sucesso!" });
};

const editPet = async (req, res) => {
    const { id } = req.params;
    const { nome, porte, alergia, observacao } = req.body; 

    const pet = await Pet.findByIdAndUpdate(id, { nome, porte, alergia, observacao }, { new: true });

    if (!pet) {
        return res.status(404).json({ message: "Pet não encontrado!" });
    }

    res.status(200).json({
        message: "Pet atualizado com sucesso!",
        pet
    });
};

module.exports = { createPet, getAllPets, deletePet, editPet };
