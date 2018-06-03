// // Ingredients Model //
var Sequelize = require ("sequelize");

module.exports = function(sequelize, DataTypes) {
  var shopping_list = sequelize.define("shopping_list", {
    id: {
      type: Sequelize.INTEGER
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    list_id: {
      type: Sequelize.INTEGER
    },
    ingredients_name: {
        type: Sequelize.STRING
    },
    amount: {
      type: Sequelize.INTEGER
    },
    units: {
      type: Sequelize.INTEGER
    },
    purchased: {
      type: Sequelize.STRING
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    }
  });

  shopping_list.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    shopping_list.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
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