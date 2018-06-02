// Users Model
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB //
var sequelize = require("../config/connection.js");

var users = sequelize.define("users", {
    id: {
      type: Sequelize.INTEGER
    },
    real_name: {
      type: Sequelize.STRING
    },
    user_name: {
      type: Sequelize.STRING
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    password: {
        type: Sequelize.STRING
    }
  });
  
  // Syncs with DB //
  users.sync();
  
  module.exports = users;