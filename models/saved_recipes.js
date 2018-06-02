// Recipes Model //
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB //
// var sequelize = require("../config/connection.js");

var saved_recipes = sequelize.define("saved_recipes", {
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
    }
  });
  
  // Syncs with DB //
  saved_recipes.sync();
  
  module.exports = saved_recipes;
