// // ingredients Model //
var Sequelize = require ("sequelize");

module.exports = function(sequelize, DataTypes) {
    var saved_ingredients = sequelize.define("saved_ingredients", {
      ingredient_name: {
        type: Sequelize.STRING
      },
      purchased: {
        type: Sequelize.BOOLEAN
      },
      ingredient_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true
      },
      shopping_list_id: {
          type: DataTypes.UUID,
          foreignKey: true
      }
    });
  
    saved_ingredients.associate = function(models) {
      saved_ingredients.belongsTo(models.shopping_list, {
        foreignKey: 'ingredient_id'
      });
    };
  
    return saved_ingredients;
  };