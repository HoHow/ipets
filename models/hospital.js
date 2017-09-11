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
    return hospital
  },
  getAllHospital({area,name,page,setPage}){

    //收尋店名
    if(name !== undefined){
      return this.hospital().findAll({where:{name:{$like:'%'+name+'%'}},limit:setPage,offset:setPage*page})
    }
    //收尋地區
    if(area !== undefined){
      return this.hospital().findAll({where:{area:area},limit:setPage,offset:setPage*page})
    }
    //預設
    return this.hospital().findAll({limit:setPage,offset:setPage*page})
    
  }
}




