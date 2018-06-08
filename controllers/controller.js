// Requiring the DB and requiring a model //
var express = require("express");
const db = require("../models");
var router = express.Router();
var path = require("path");
var session = require('express-session');


// HTML Routing Functionality
// ======================================================================

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

// router.post("/api/users", function(req, res) {
//   db.User.create(req.body).then(function(dbUser) {
//     res.json(dbUser);
//     });
// });


// Log In Functionality

  // // GET route for getting a specific users (Logging In)
  // router.post("/api/users", function(req, res) {
  //   db.User.findOne({
  //     where: {
  //       user_name: req.body.user_name,
  //       password: req.body.password
  //     }
  //   }).then(function(dbUsers) {
  //     console.log(dbUsers)
  //     if (dbUsers != null) {
  //       var currentUser = dbUsers.id
  //       res.sendFile( path.join(__dirname, "../public/home.html"))
  //     }
  //     else {
  //       error = 'Invalid username/password combination'
  //       var hbsObject = {error}
  //       console.log(hbsObject)
  //       res.render('index', hbsObject)
  //     }
  //   })
  // })

//   // Update a user //
//   router.put("/api/users/:id", function(req, res) {
//   // Update info //

//   });


// Return all existing users
router.get("/api/users", function(req, res) {
  db.users.findAll(
).then(function(dbUsers) {
    res.json(dbUsers);
  });
});


// SHOPPING LIST Related DB Functionality
// ==============================================================================

// Route to get a given user's saved grocery lists
router.get("/api/users/:id", function(req, res) {
  db.users.findOne({
    where: {
      user_id: req.params.id
    },
    include: [db.shopping_lists]
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});


// Export routes for server.js to use //
module.exports = router;