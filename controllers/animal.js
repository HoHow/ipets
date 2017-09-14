var sequelize = require('../config/db_config');
var helper = require('./helper');
var model = require('../models/hospital');
var animalModel = require('../models/animaldata');
var joi = require('joi');
class animal{
  //get /api/v1/animalhospital?page=&area=&name=
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
      });
      joi.validate({area:queryObject.area},schema);
     
      //連接資料庫
      var hospitalRows = await model.getAllHospital(queryObject);
      
      //回傳json
      res.json({status:1,data:hospitalRows});
    }catch(error){
      next(error);
    }
  }
  //get /api/v1/animaldata?kind=&shelter_name=&sex=&bodytype=&age=
  async getAllAnimalData(req, res, next){
    try{
      
      var query = {
        kind: req.query.kind || '',
        shelter_name: req.query.shelter_name || '',
        bodytype: req.query.bodytype || '',
        sex: req.query.sex || '',
        age: req.query.age || ''
      }
      var dataRows = await animalModel.getAllAnimalData(query);
      res.json({status:1,data:dataRows});
    }catch(error){
      next(error);
    }
  }
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