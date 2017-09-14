var express = require('express');
var router = express.Router();
var animalHospital = require('./animalHospital');
var animalData = require('./animalData');
/* 前端 router */

//動物醫院
router.use('/animalhospital',animalHospital);
router.use('/animaldata',animalData);

module.exports = router;
