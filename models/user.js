var Sequelize = require ("sequelize");
// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcrypt-nodejs");

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
        allowNull: false,
        unique: true,
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
// Creating a custom method for our User model. 
  //This will check if an unhashed password entered by the 
  //user can be compared to the hashed password stored in our database
  users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  users.hook("beforeCreate", function(user) {
    users.password = bcrypt.hashSync(users.password, bcrypt.genSaltSync(10), null);
  });
//   user.associate = function(models) {
//       user.hasMany(modes.shopping_list, {
//     onDelete: "cascade"
//       })
//   }

  return users;
};
