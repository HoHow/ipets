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
    console.log(area)
    //收尋店名,收尋地區
    if(name !== undefined || area !== undefined){
      return this.hospital().findAll({where:{area:{$like:'%'+area+'%'},name:{$like:'%'+name+'%'}},limit:setPage,offset:setPage*page})
    }
    
    
    // if(area !== undefined ){
    //   return this.hospital().findAll({where:{area:{$like:'%'+area+'%'},ame:{$like:'%'+name+'%'}},limit:setPage,offset:setPage*page})
    // }
    //預設
    return this.hospital().findAll({limit:setPage,offset:setPage*page})
    
  }
}




