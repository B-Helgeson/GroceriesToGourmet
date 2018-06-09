// Requiring the DB and requiring a model //
var express = require("express");
const db = require("../models");
var router = express.Router();
var path = require("path");
var session = require('express-session');
var passport = require("../config/passport/passport.js");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

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

router.post("/api/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request, so we're sending the user back the route to the members page because the redirect will happen on the front end they won't get this or even be able to access this page if they aren't authed
  res.json("/home");
});
//
// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in, otherwise send back an error
router.post("/api/signup", function(req, res) {
  console.log(req.body);
  db.users.create({
    email: req.body.email,
    password: req.body.password
  }).then(function() {
    res.redirect(307, "/api/index");
  }).catch(function(err) {
    console.log(err);
    res.json(err);
    // res.status(422).json(err.errors[0].message);
  });
});
//
// Route for logging user out
router.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});
//
// Route for getting some data about our user to be used client side
router.get("/api/user_data", function(req, res) {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  }
  else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  }
});
router.get("/", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/home");
  }
  res.sendFile(path.join(__dirname, "../public/signup.html"));
});
//
router.get("/login", function(req, res) {
  // If the user already has an account send them to the members page
  if (req.user) {
    res.redirect("/members");
  }
  res.sendFile(path.join(__dirname, "../public/login.html"));
});
//
// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be 
//redirected to the signup page
router.get("/members", isAuthenticated, function(req, res) {
  res.sendFile(path.join(__dirname, "../public/members.html"));
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