var Sequelize = require ("sequelize");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
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

  User.associate = function(models) {
    // Associating User with shopping_list
    // When a User is deleted, also delete any associated shopping lists
    User.hasMany(models.shopping_list, {
      onDelete: "cascade"
    });
  };

  return User;
};
