'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('hospitals',{
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
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('hospitals');
  }
};
