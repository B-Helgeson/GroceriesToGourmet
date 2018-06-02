var express = require("express");

var router = express.Router();

// Import the models to use their database functions.
var shopping_list = require("../models/shopping_list.js"),
    recipes = require("../models/recipes.js"),
    users = require("../models/users.js");

// Create all our routes and set up logic within those routes where required.

// Get users //
router.get("/", function(req, res) {
  users.all(function(data) {
    var hbsObject = {
      users: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a user //
router.post("/api/users", function(req, res) {
    // Return results // 
});

// Update a user //
router.put("/api/users/:id", function(req, res) {
// Update info //
});

// ------------------------------------------------------------------------- //

// Get recipes //
router.get("/", function(req, res) {
  saved_recipes.all(function(data) {
    var hbsObject = {
      saved_recipes: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a recipe //
router.post("/api/saved_recipes", function(req, res) {
    // Return results // 
});

// Update a recipe //
router.put("/api/saved_recipes/:id", function(req, res) {
// Update info // 
});

// ------------------------------------------------------------------------- //

// Get shopping list //
router.get("/", function(req, res) {
  shopping_list.all(function(data) {
    var hbsObject = {
      shopping_list: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Create a shopping list //
router.post("/api/shopping_list", function(req, res) {
    // Return results //
});

// Update a shopping list //
router.put("/api/shopping_list/:id", function(req, res) {
// Update info // 
});

// Export routes for server.js to use //
module.exports = router;