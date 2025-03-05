const express = require('express');
const router = express.Router();
const petController = require("../controller/petController")
const WithAuth = require('../middleware/auth.js');

router.get("/pets", WithAuth, petController.getAllPets);
router.post("/pets", petController.createPet);
router.delete("/pets/:id", petController.deletePet);
router.put("/pets/:id", petController.editPet);

module.exports = router