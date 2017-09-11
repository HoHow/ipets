var sequelize = require('../config/db_config');
var helper = require('./helper');
var model = require('../models/hospital');
var joi = require('joi');
class animal{
  //get 動物醫院
  async getAllHospital(req, res, next){
    try{
      //頁碼設定
      const setPage = 10;
      //area query
      var queryObject = Object.assign({},req.query);
      queryObject.setPage = setPage;
      
      //驗證area
      const schema = joi.object().keys({
        area: joi.string().regex(/^[\u4e00-\u9fa5]+$/).allow('').error((err) => { isarea(err) }),
      })
      joi.validate({area:queryObject.area},schema)
     
      //連接資料庫
      var hospitalRows = await model.getAllHospital(queryObject)
      
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