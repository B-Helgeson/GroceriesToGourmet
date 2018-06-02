module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the Users model a name of type STRING
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

  User.associate = function(models) {
    // Associating User with saved_recipies
    // When a User is deleted, also delete any associated Posts
    User.hasMany(models.saved_recipies, {
      onDelete: "cascade"
    });
  };

  User.associate = function(models) {
    // Associating User with saved_recipies
    // When a User is deleted, also delete any associated Posts
    User.hasMany(models.saved_recipies, {
      onDelete: "cascade"
    });
  };

  return User;
};



// // Users Model //
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB //
// // var sequelize = require("../config/connection.js");

// var users = sequelize.define("users", {
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
//     },
//     password: {
//         type: Sequelize.STRING
//     }
//   });
  
//   // Syncs with DB //
//   users.sync();
  
//   module.exports = users;