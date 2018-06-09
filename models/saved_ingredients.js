// // ingredients Model //
var Sequelize = require ("sequelize");

module.exports = function(sequelize, DataTypes) {
    var saved_ingredients = sequelize.define("saved_ingredients", {
      ingredient_name: {
        type: Sequelize.STRING
      },
      purchased: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      ingredient_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      }
    });
  
    // saved_ingredients.associate = function(models) {
    //   saved_ingredients.belongsTo(models.shopping_lists, {
    //     foreignKey: {
    //       allowNull: false
    //     }
    //   });
    // };
   
    return saved_ingredients;
  };