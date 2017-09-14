var schedule = require('node-schedule');
var request = require('request');
var animalDataModel = require('./models/animaldata')
const url = 'http://data.coa.gov.tw/Service/OpenData/AnimalOpenData.aspx';
//格式:[秒數] [分鐘] [小時] [日期] [月份] [星期幾] [年(可不填)]
var j = schedule.scheduleJob('1 1 * *',async function(){
  try{
    var animalData = await getAnimalData(url);
    await animalDataModel.addAnimalData(animalData);
  }catch(error){
    next(error)
  }
});


function getAnimalData(url){
  return new Promise((ok,faild)=>{
    request(url,(err, res, body)=>{
      if (err) throw new Error('request faild');
      let data = JSON.parse(body);
      ok(data)
    })
  })
}


