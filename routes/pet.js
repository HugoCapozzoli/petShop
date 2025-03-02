const router = require('express').Router();
const petController = require("../controller/petController")


router.get("/pets", petController.getAllPets);
router.post("/pets", petController.createPet);
router.delete("/pets/:id", petController.deletePet);
router.put("/pets/:id", petController.editPet);


module.exports = router