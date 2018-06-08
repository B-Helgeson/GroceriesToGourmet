// Requiring the DB and requiring a model //
var express = require("express");
const db = require("../models");
var router = express.Router();
var path = require("path");
var session = require('express-session');

var exports = module.exports = {}
 
exports.signup = function(req, res) {
 
    res.render('signup');
 
}

// HTML Routing Functionality
//======================================================================

// Get users //
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


//====================================================================================
// Create a user - this functionality works! Requires a model like this: 

/*  {"real_name":"Brandon Helgeson",
    "user_name":"Chef Brandon",
    "password":"123"}   */

router.post("/api/users", function(req, res) {
  db.User.create(req.body).then(function(dbUser) {
    res.json(dbUser);
    });
});


// Log In Functionality

  // GET route for getting a specific users
  router.get("/api/users", function(req, res) {
    db.User.findOne({
      where: {
        user_name: req.query.user_name,
        password: req.query.password
      }
    }).then(function(dbUsers) {
      console.log(dbUsers)
      if (dbUsers != null) {
        var currentUser = dbUsers.id
        res.sendFile( path.join(__dirname, "../public/home.html"))
      }
      else {
        error = 'Invalid username/password combination'
        var hbsObject = {error}
        console.log(hbsObject)
        res.render('index', hbsObject)
      }
    })
  })

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