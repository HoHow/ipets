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
  getAllHospital({area,name,page,setPage}){
    //收尋店名,收尋地區
    if(name !== undefined || area !== undefined){
      return this.hospital().findAll({where:{area:{$like:'%'+area+'%'},name:{$like:'%'+name+'%'}},limit:setPage,offset:setPage*page});
    }
    //預設
    return this.hospital().findAll({limit:setPage,offset:setPage*page});
    
  },
  postSingleHospital({area,name,address,number}){
    return this.hospital().create({name:name,address:address,number:number,area:area}).catch(Sequelize.ValidationError, function (err) {
      throw new Error('店家名稱重覆');
    });
  },
  updateSingleHospital({id, area, name, address, number}){
    
    return this.hospital().update({area:area,address:address,name:name,number:number},{where:{id:id}});
    
  }
}




