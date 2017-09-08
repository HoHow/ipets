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
  getAllHospital(query){
    if(query !== ''){
      return this.hospital().findAll({where:{area:query}})
    }else{
      return this.hospital().findAll()
    }
    
  }
}




