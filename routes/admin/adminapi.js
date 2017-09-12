var express = require('express');
var router = express.Router();
var animalHospital = require('./animalHospital')
/* 後端 router */

//動物醫院
router.use('/animalhospital',animalHospital)

module.exports = router;
