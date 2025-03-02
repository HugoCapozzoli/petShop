const petModel = require('../model/pet.js')

const createPet = async (req, res) => {
    const { nome, porte, alergia, obsevacao } = req.body
    const newPet = new petModel({ nome, porte, alergia, obsevacao });
    await newPet.save();
    res.status(201).json({
        message: "Pet cadastrado com sucesso!",
        pet: newPet
    });
}

const getAllPets = async (req, res) => {
    const pets = await Pet.find();
    res.status(200).json(pets);
};

const deletePet = async (req, res) => {
    const { id } = req.params;

    const pet = await Pet.findById(id);

    await Pet.deleteOne({ _id: id });
    res.status(200).json({ message: "Pet removido com sucesso!" });
};

const editPet = async (req, res) => {
    const { id } = req.params;
    const { name, porte, alergia, observacao } = req.body;

    let pet = await Pet.findByIdAndUpdate(id, { name, porte, alergia, observacao });

    res.status(200).json({
        message: "Pet atualizado com sucesso!",
        pet,
    });
};



module.exports = { createPet, getAllPets, deletePet, editPet };