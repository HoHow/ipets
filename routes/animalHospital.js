var express = require('express');
var router = express.Router();
var animalController = require('../controllers/animal');
var animalObject = new animalController()

//get 動物醫院
router.get('/', animalObject.getAllHospital);

module.exports = router;
