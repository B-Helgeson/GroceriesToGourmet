var express = require("express");

var router = express.Router();

// Import the models to use their database functions.
var shopping_list = require("../models/shopping_list.js"),
    recipes = require("../models/recipes.js"),
    users = require("../models/users.js");

// Create all our routes and set up logic within those routes where required.

// get users
router.get("/", function(req, res) {
  cat.all(function(data) {
    var hbsObject = {
      users: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// create a user
router.post("/api/users", function(req, res) {
    // return results
});

// update a user
router.put("/api/users/:id", function(req, res) {
// update info
});

// Export routes for server.js to use.
module.exports = router;