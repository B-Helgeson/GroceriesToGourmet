// This file contains the routing to various html pages

var path = require("path");

module.exports = function(app) {

  // Each of the below routes handles the html pages the user gets sent to.

    app.get("/", function(req, res) {
        res.render("login")
    })

    app.get("/loggedin", function(req, res) {
        res.render("home")
    })

    app.get("/shoppinglist", function(req, res) {
        res.render("shoppingList")
    })

    app.get("/useredit", function(req, res) {
        res.render("user")
    })

}