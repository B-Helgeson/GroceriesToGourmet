// Requiring the DB and requiring a model //
var express = require("express");
const db = require("../models");
var router = express.Router();
var path = require("path");
var session = require('express-session');


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


/// USER Related DB Functionality
// =======================================================================

// Attempting to create uers with sessions, this part isn't working so commented out for now... 
/*
// initialize express-session to allow us track the logged-in user across sessions.
router.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
  expires: 600000
  }
}));

// This middleware will check if user's cookie is still saved in browser and user is not set, then automatically log the user out.
// This usually happens when you stop your express server after login, your cookie still remains saved in the browser.
router.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
  res.clearCookie('user_sid');        
  }
  next();
});

// middleware function to check for logged-in users
var sessionChecker = (req, res, next) => {
  if (req.session.user && req.cookies.user_sid) {
      res.redirect('/loggedin');
  } else {
      next();
  }    
};

// route for Home-Page
router.get('/', sessionChecker, (req, res) => {
  res.redirect('/login');
});


// route for user signup
router.route('/signup')
  .get(sessionChecker, (req, res) => {
      res.sendFile(__dirname + '/index.html');
  })
  .post((req, res) => {
      User.create({
          username: req.body.username,
          real_name: req.body.real_name,
          password: req.body.password
      })
      .then(user => {
          req.session.user = user.dataValues;
          res.redirect('/login');
      })
      .catch(error => {
          res.redirect('/signup');
      });
  });

// route for user Login
router.route('/login')
  .get(sessionChecker, (req, res) => {
      res.sendFile(__dirname + '/index.html');
  })
  .post((req, res) => {
      var username = req.body.username,
          password = req.body.password;

      User.findOne({ where: { username: username } }).then(function (user) {
          if (!user) {
              res.redirect('/login');
          } else if (!user.validPassword(password)) {
              res.redirect('/login');
          } else {
              req.session.user = user.dataValues;
              res.redirect('/loggedin');
          }
      });
  });


// route for user's dashboard
router.get('/loggedin', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
      res.sendFile(__dirname + '/public/home.html');
  } else {
      res.redirect('/index');
  }
});

// route for user logout
router.get('/logout', (req, res) => {
  if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
      res.redirect('/');
  } else {
      res.redirect('/login');
  }
});
*/

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