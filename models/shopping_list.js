// // Ingredients Model //
var Sequelize = require ("sequelize");
  
module.exports = function(sequelize, DataTypes) {
  var shopping_list = sequelize.define("shopping_list", {
    list_name: {
      type: Sequelize.STRING
    },
    user_id: {
      type: Sequelize.INTEGER,
      foreignKey: true
    },
    shopping_list_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  });

  shopping_list.associate = function(models) {
    // A shopping list belongs to a user, and they can have many
    shopping_list.belongsTo(models.User, {
      foreignKey: 'user_id'
    });

    // A shopping list has multiple saved recipes
    shopping_list.hasMany(models.saved_recipes, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });

    //A shopping list has multiple saved ingredients
    shopping_list.hasMany(models.saved_ingredients, {
      foreignKey: {
        allowNull: false
      },
      onDelete: "cascade"
    });
  };

  return shopping_list;
};




// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB //
// // var sequelize = require("../config/connection.js");

// var shopping_list = sequelize.define("shopping_list", {
//     id: {
//       type: Sequelize.INTEGER
//     },
//     user_id: {
//       type: Sequelize.INTEGER
//     },
//     list_id: {
//       type: Sequelize.INTEGER
//     },
//     ingredients_name: {
//         type: Sequelize.STRING
//     },
//     amount: {
//       type: Sequelize.INTEGER
//     },
//     units: {
//       type: Sequelize.INTEGER
//     },
//     purchased: {
//       type: Sequelize.STRING
//     }
//   });
  
//   // Syncs with DB //
//   shopping_list.sync();
  
//   module.exports = shopping_list;