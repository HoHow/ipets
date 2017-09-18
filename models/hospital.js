var Sequelize = require('sequelize');
var dbStroage = require('../config/db_config.js')
module.exports = {
  hospital:()=>{
    const hospital = dbStroage.define('hospitals', {
      id:{ 
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
      },
      area:{
        type:Sequelize.STRING,
        allowNull: false
      },
      name:{
        type:Sequelize.STRING,
        allowNull: false
      },
      address:{
        type:Sequelize.STRING,
        allowNull: false
      },
      number:{
        type:Sequelize.STRING,
        allowNull: false
      }
    
    }, {
      timestamps: false
    });
    return hospital;
  },
  getAllHospital(query){
    //收尋店名,收尋地區
    var objquery = checkquery(query);
    var setPage = parseInt(query.setPage);
    var page = parseInt(query.page);
    console.log(objquery)
    return this.hospital().findAll({where:objquery,limit:setPage,offset:setPage*page,});
    //{name:{$like:'%'+ objquery.name +'%'},area:objquery.area}
  },
  postSingleHospital({area,name,address,number}){
    return this.hospital().create({name:name,address:address,number:number,area:area}).catch(Sequelize.ValidationError, function (err) {
      throw new Error('店家名稱重覆');
    });
  },
  updateSingleHospital({id, area, name, address, number}){
    return this.hospital().update({area:area,address:address,name:name,number:number},{where:{id:id}});
  },
  deleteSingleHospital(id){
    return this.hospital().destroy({where:{id:id}})
  }
}

function checkquery({area,name,page,setPage}){
  let obj = {};
  if(name !== ''){
    obj.name = {$like:'%'+ name +'%'};
  }
  if(area !== ''){
    obj.area = area;
  }
  //console.log(obj)
  return obj
}



