// db-routes.js - provides "api" routing to the database functionality

// Requiring our models
const db = require("../models")

// Routes
// =============================================================
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
      
      // Create a user //
      app.post("/api/users", function(req, res) {
          // Return results // 
        db.user.create(req.body).then(function(hbsObject) {
          res.json(hbsObject);
          });
      });
      
      // Update a user //
      app.put("/api/users/:id", function(req, res) {
      // Update info //
      
      });
      
      // ------------------------------------------------------------------------- //
      
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
      
      // ------------------------------------------------------------------------- //
      
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
      
    }

    // ------------------------------------------------------------------- //

    