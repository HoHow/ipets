var sequelize = require('../../config/db_config');
var helper = require('../helper');
var model = require('../../models/hospital');
var joi = require('joi');
class animal{

  //post /api/v1/animalhospital
  async postHospital(req, res, next){
    try{
      var bodyObject = Object.assign({},req.body);
      //資料庫處理
      const schema = joi.object().keys({
        area: joi.string().regex(/^[\u4e00-\u9fa5]+$/).error((err) => { isarea(err) }),
        name: joi.string().regex(/^[\u4e00-\u9fa5_a-zA-Z0-9_\s]+$/).min(1).max(20).error((err) => { isname(err) }),
        address: joi.string().error((err) => { isaddress(err) }),
        number: joi.string().regex(/^[0-9]{2}[\-]\d+$/).error((err) => { isnumber(err) }),
      });
      joi.validate({area:bodyObject.area,name:bodyObject.name,address:bodyObject.address,number:bodyObject.number},schema);
      
      await model.postSingleHospital(bodyObject);

      //回傳json
      res.json({status:1,message:'上傳成功'});
    }catch(error){
      next(error);
    }
  }
  //putHospital
  async updateHospital(req, res, next){
    try{
      var hid = req.params.id
      var bodyObject = Object.assign({}, req.body);
      bodyObject.id = hid;

      const schema = joi.object().keys({
        area: joi.string().regex(/^[\u4e00-\u9fa5]+$/).error((err) => { isarea(err) }),
        name: joi.string().regex(/^[\u4e00-\u9fa5_a-zA-Z0-9_\s]+$/).min(1).max(20).error((err) => { isname(err) }),
        address: joi.string().error((err) => { isaddress(err) }),
        number: joi.string().regex(/^[0-9]{2}[\-]\d+$/).error((err) => { isnumber(err) }),
      });
      joi.validate({area:bodyObject.area,name:bodyObject.name,address:bodyObject.address,number:bodyObject.number},schema);

      //資料庫
      await model.updateSingleHospital(bodyObject);

      //回傳json
      res.json({status:1,message:'上傳成功'});
    }catch(error){
      next(error)
    }
  }
  //deleteHospital
}

//判斷地區
function isarea (err) {
  switch (err[0].type) {
    case 'string.regex.base':
      //string.regex.base
      throw new Error('地區錯誤');
      break
    default:
      throw new Error('地區錯誤');
  }
}
//判斷店家名稱
function isname (err) {
  switch (err[0].type) {
    case 'string.regex.base':
      //string.regex.base
      throw new Error('店家名稱格式錯誤')
      break
    case 'string.min':
      //string.min 最小1
      throw new Error('姓名最少1個字元')
      break
    case 'string.max':
      //string.max 最大20
      throw new Error('姓名最多20個字元')
      break
    case 'any.empty':
      //any.empty 
      throw new Error('姓名不能為空')
      break
    case 'any.required':
      //any.required
      throw new Error('姓名不能為空')
      break
    default:
  }
}
// 電話判斷
function isnumber (err) {
  switch (err[0].type) {
    case 'string.regex.base':
      //string.regex.base
      throw new Error('電話格式錯誤')
      break
    case 'any.empty':
      //any.empty 
      throw new Error('電話不能為空')
      break
    case 'any.required':
      //any.required
      throw new Error('電話不能為空')
      break
    default:
  }
}

function isaddress (err){
  switch (err[0].type) {
    case 'string.regex.base':
      //string.regex.base
      throw new Error('電話格式錯誤')
      break
    case 'any.empty':
      //any.empty 
      throw new Error('地址不能為空')
      break
    case 'any.required':
      //any.required
      throw new Error('地址不能為空')
      break
    default:
  }
}


module.exports = animal;