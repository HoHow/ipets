var sequelize = require('../config/db_config');
var helper = require('./helper');
var model = require('../models/hospital');
var joi = require('joi');
class animal{
  //get 動物醫院
  async getAllHospital(req, res, next){
    try{
      //area query
      var area = req.query.area;
      //驗證area
      const schema = joi.object().keys({
        area: joi.string().regex(/^[\u4e00-\u9fa5]+$/).error((err) => { isarea(err) }),
      })
      joi.validate({area:area},schema)
     
      //連接資料庫
      var hospitalRows = await model.getAllHospital(area)
      
      //回傳json
      res.json({status:1,data:hospitalRows})
    }catch(error){
      next(error)
    }
  }

  //postHospital
  //putHospital
  //deleteHospital
}

//判斷地區
function isarea (err) {
  switch (err[0].type) {
    case 'string.regex.base':
      //string.regex.base
      throw new Error('地區錯誤')
      break
    default:
      throw new Error('地區錯誤')
  }
}


module.exports = animal;