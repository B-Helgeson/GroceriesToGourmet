var Sequelize = require ("sequelize");

module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    user_id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },

    firstname: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    lastname: {
        type: Sequelize.STRING,
        notEmpty: true
    },

    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    last_login: {
        type: Sequelize.DATE
    },

    status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
    }
});

  users.associate = function(models) {
    users.hasMany(models.shopping_lists, {
      onDelete: "cascade"
    });
  };

//   user.associate = function(models) {
//       user.hasMany(modes.shopping_list, {
//     onDelete: "cascade"
//       })
//   }

  return users;
};
