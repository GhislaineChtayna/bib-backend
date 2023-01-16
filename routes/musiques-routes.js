const express = require('express')
const router = express.Router()

const musiquesControllers = require('../controllers/musiques-controllers')

//respond with "Hello World" when a GET request is made to the homepage
router.get('/',musiquesControllers.getMusiques);
router.get("/:musiqueid",musiquesControllers.getMusiqueById);
router.post("/", musiquesControllers.createMusique);
router.patch("/:musiqueid",musiquesControllers.updateMusique);
router.delete("/:musiqueid",musiquesControllers.deleteMusique);


module.exports=router;
