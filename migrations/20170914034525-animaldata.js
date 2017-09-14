'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
   return queryInterface.createTable('animaldatas',{
    id:{ 
      type:Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    //動物的實際所在地
    place:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //動物的類型
    kind:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //動物性別
    sex:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //動物體型
    bodytype:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //動物毛色
    colour:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //動物年紀
    age:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //是否絕育
    sterilization:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //是否施打狂犬病疫苗
    bacterin:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //動物所屬收容所名稱
    shelter_name:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //圖片名稱
    album_file:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //地址
    shelter_address:{
      type:Sequelize.STRING,
      allowNull: true
    },
    //聯絡電話
    shelter_tel:{
      type:Sequelize.STRING,
      allowNull: true
    }
   })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('animaldatas');
  }
};
