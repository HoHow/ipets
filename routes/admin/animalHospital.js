var express = require('express');
var router = express.Router();
var animalController = require('../../controllers/admin/animal');
var animalObject = new animalController()

//post 新增動物醫院
router.post('/', animalObject.postHospital);
//待建立
//put 更新動物醫院
router.put('/:id', animalObject.updateHospital);
//delete 刪除動物醫院
router.delete('/:id',animalObject.deleteHopspital)
module.exports = router;
