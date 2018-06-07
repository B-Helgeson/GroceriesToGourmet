// db-routes.js - provides "api" routing to the database functionality

// Requiring our models
const db = require("../models")

// Routes

module.exports = function(app) {

    app.get("/", function(req, res) {
        user.all(function(data) {
          var hbsObject = {
            user: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
        });
      });

/// USER Related DB Functionality
// =======================================================================
      
      // Create a user - this functionality works! Requires a model like this: 
      
      /*  {"real_name":"Brandon Helgeson",
          "user_name":"Chef Brandon",
          "password":"123"}   */

      app.post("/api/users", function(req, res) {
        db.User.create(req.body).then(function(dbUser) {
          res.json(dbUser);
          });
      });
      
      // Update a user //
      app.put("/api/users/:id", function(req, res) {
      // Update info //
      
      });

      app.get("/api/users", function(req, res) {
        db.User.findAll(
          //{include: [db.saved_recipes]}
      ).then(function(dbUsers) {
          res.json(dbUsers);
        });
      });
      

// RECIPE Related DB Functionality
// ==============================================================================
      
      // Get recipes //
      app.get("/", function(req, res) {
        saved_recipes.all(function(data) {
          var hbsObject = {
            saved_recipes: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
        });
      });
      
      // Create a recipe //
      app.post("/api/saved_recipes", function(req, res) {
          // Return results // 
      });
      
      // Update a recipe //
      app.put("/api/saved_recipes/:id", function(req, res) {
      // Update info // 
      });
      
// SHOPPING LIST Related DB Functionality
// ==============================================================================
      
      // Get shopping list //
      app.get("/", function(req, res) {
        shopping_list.all(function(data) {
          var hbsObject = {
            shopping_list: data
          };
          console.log(hbsObject);
          res.render("index", hbsObject);
        });
      });
      
      // Create a shopping list //
      app.post("/api/shopping_list", function(req, res) {
          // Return results //
      });
      
      // Update a shopping list //
      app.put("/api/shopping_list/:id", function(req, res) {
      // Update info // 
      });


//=====================================================================
    } // End of Module Exports Function

    