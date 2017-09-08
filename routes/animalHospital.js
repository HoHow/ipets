var express = require('express');
var router = express.Router();
var animalController = require('../controllers/animal');
var animalObject = new animalController()

//get 動物醫院
router.get('/', animalObject.getAllHospital);

//待建立
//post 新增動物醫院
//put 更新動物醫院
//delete 刪除動物醫院
module.exports = router;
