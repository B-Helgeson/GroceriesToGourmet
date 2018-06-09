// // items Model //
var Sequelize = require ("sequelize");

module.exports = function(sequelize, DataTypes) {
  var saved_items = sequelize.define("saved_items", {
    api_recp_id: {
      type: Sequelize.INTEGER,
      allowNull: true
    }, 
    recipe_name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    recipe_descr: {
      type: Sequelize.STRING,
      allowNull: true
    },
    ingredient_name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    purchased: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    },
    item_type: {
      type: Sequelize.ENUM('recipe', 'ingredient'),
      defaultValue: 'ingredient'
  },
    item_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    }
  });
 
  saved_items.associate = function(models) {
    saved_items.belongsTo(models.shopping_lists, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return saved_items;
};
