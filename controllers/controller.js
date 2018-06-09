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

/*    {"firstname":"Jeff",
    "lastname":"Smith",
    "email":"mail2@mail.com",
    "password":"pass2123"}  */

router.post("/api/users", function(req, res) {
  db.users.create(req.body).then(function(dbUser) {
    res.json(dbUser);
    });
});


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

// Route to get a given user's saved shopping lists
    //to use, get with user id in the url
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


// Post to Create New Shopping Lists, to use send a message like below:

/*  {"list_name":"My List",
    "userUserId":1}  */

router.post("/api/shoppingLists", function(req, res) {
  db.shopping_lists.create(req.body).then(function(dbList) {
    res.json(dbList);
    });
});


// Get to return a shopping list and it's given ingredients/recipes:
router.get("/api/shoppingLists/:id", function(req, res) {
  db.shopping_lists.findOne({
    where: {
      shopping_list_id: req.params.id
    },
    include: [db.saved_recipes]
  }).then(function(dbUser) {
    res.json(dbUser);
  });
});

// Post to create new ingredients, to use, send a message like below:

/*  {"ingredient_name":"Chicken Breast",
    "purchased":false,
    "shoppingListShoppingListId":1
    "item_type":"ingredient"}  */

router.post("/api/ingredients", function(req, res) {
  db.saved_items.create(req.body).then(function(dbItems) {
    res.json(dbItems);
    });
});


// Post to create new recipes, to use, send a message like below:

/*  {"api_recp_id":"1234224",
    "recipe_name":"Southern Fried Chicken",
    "recipe_descr":"Finger Lick'n Good!",
    "shoppingListShoppingListId":1}  */

    router.post("/api/recipes", function(req, res) {
      db.saved_recipes.create(req.body).then(function(dbRecps) {
        res.json(dbRecps);
        });
    });


// Export routes for server.js to use //
module.exports = router;