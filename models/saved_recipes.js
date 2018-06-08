// // Recipes Model //
var Sequelize = require ("sequelize");

module.exports = function(sequelize, DataTypes) {
  var saved_recipes = sequelize.define("saved_recipes", {
    api_recp_id: {
      type: Sequelize.INTEGER
    }, 
    recipe_name: {
      type: Sequelize.STRING
    },
    recipe_descr: {
      type: Sequelize.STRING
    },
    recipe_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  });

  saved_recipes.associate = function(models) {
    saved_recipes.belongsTo(models.shopping_lists, {
      foreignKey: 'recipe_id'
    });
  };

  return saved_recipes;
};
