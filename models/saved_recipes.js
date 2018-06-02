// // Recipes Model //

module.exports = function(sequelize, DataTypes) {
  var saved_recipies = sequelize.define("saved_recipies", {
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

  saved_recipies.associate = function(models) {
    // We're saying that a saved_recipies should belong to an User
    // A saved_recipies can't be created without an User due to the foreign key constraint
    saved_recipies.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return saved_recipies;
};




// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB //
// // var sequelize = require("../config/connection.js");

// var saved_recipes = sequelize.define("saved_recipes", {
//     id: {
//       type: Sequelize.INTEGER
//     },
//     real_name: {
//       type: Sequelize.STRING
//     },
//     user_name: {
//       type: Sequelize.STRING
//     },
//     user_id: {
//         type: Sequelize.INTEGER
//     }
//   });
  
//   // Syncs with DB //
//   saved_recipes.sync();
  
//   module.exports = saved_recipes;
