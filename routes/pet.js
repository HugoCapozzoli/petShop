const router = require('express').Router();
const petController = require("../controller/petController")


router.get("/pet", petController.getAllPets);
router.post("/pet", petController.createPet);
router.delete("/pet/:id", petController.deletePet);
router.put("/pet/:id", petController.editPet);


module.exports = router