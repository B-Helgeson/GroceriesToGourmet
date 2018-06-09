// // Ingredients Model //
var Sequelize = require ("sequelize");
  
module.exports = function(sequelize, DataTypes) {
  var shopping_lists = sequelize.define("shopping_lists", {
    list_name: {
      type: Sequelize.STRING
    },
    shopping_list_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });
 
  shopping_lists.associate = function(models) {
    // A shopping list belongs to a user, and they can have many
    shopping_lists.belongsTo(models.users, {
      foreignKey: {
        allowNull: false
      }
    })
  };

  shopping_lists.associate = function(models) {
    shopping_lists.hasMany(models.saved_items, {
      onDelete: "cascade"
    });
  };

  // shopping_lists.associate = function(models) {
  //     shopping_lists.hasMany(models.saved_ingredients, {
  //       onDelete: "cascade"
  //     });
  // };

  return shopping_lists;
};


