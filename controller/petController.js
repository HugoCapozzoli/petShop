const petModel = require('../model/pet.js')

const createPet = async (req, res) => {
    const { nome, porte, alergia, obsevacao } = req.body
    const newPet = new petModel({ nome, porte, alergia, obsevacao });
    await newPet.save();
    res.status(201).json(newPet);
}

module.exports = {
    createPet
}