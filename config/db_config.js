var Sequelize = require('sequelize');
var node_env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

var config = require('./config.json')[node_env];

var dbStroage = new Sequelize(config.database, config.username, config.password,{ 
  dialect: config.dialect,
  pool: {
  max: 5,
  min: 0,
  idle: 10000
  },
  "option" : {
    "define": {
        "timestamps": true,
        "freezeTableName": true
    }
  }
});

module.exports = dbStroage
