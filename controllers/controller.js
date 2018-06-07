var express = require("express");
const db = require("../models");
var router = express.Router();
var path = require("path");

// Import the models to use their database functions.
// var db = require("../models");
// var shopping_list = require("../models/shopping_list.js"),
//     recipes = require("../models/saved_recipes.js"),
//     users = require("../models/user.js");

// Create all our routes and set up logic within those routes where required.
// DB Routing Functionality
// ===========================================================

// router.get("/", function(req, res) {
//   users.all(function(data) {
//     var hbsObject = {
//       user: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });



// HTML Routing Functionality
//======================================================================

router.get("/", function(req, res) {
  // res.render("index")
  res.sendFile( path.join(__dirname, "../public/index.html"))
});

router.get("/loggedin", function(req, res) {
  // res.render("home")
  res.sendFile( path.join(__dirname, "../public/home.html"))
});

router.get("/shoppinglist", function(req, res) {
  //res.render("shoppingList")
  res.sendFile( path.join(__dirname, "../public/shoppingList.html"))
});

router.get("/useredit", function(req, res) {
  //res.render("user")
  res.sendFile( path.join(__dirname, "../public/user.html"))
});




/// USER Related DB Functionality
// =======================================================================

// Create a user - this functionality works! Requires a model like this: 

/*  {"real_name":"Brandon Helgeson",
    "user_name":"Chef Brandon",
    "password":"123"}   */

router.post("/api/users", function(req, res) {
  db.User.create(req.body).then(function(dbUser) {
    res.json(dbUser);
    });
});

// Update a user //
router.put("/api/users/:id", function(req, res) {
// Update info //

});

router.get("/api/users", function(req, res) {
  db.User.findAll(
    //{include: [db.saved_recipes]}
).then(function(dbUsers) {
    res.json(dbUsers);
  });
});


// RECIPE Related DB Functionality
// ==============================================================================

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

// SHOPPING LIST Related DB Functionality
// ==============================================================================

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