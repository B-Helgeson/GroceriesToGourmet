// This file contains the routing to various html pages

var path = require("path");

module.exports = function(app) {

  // Each of the below routes handles the html pages the user gets sent to.

    app.get("/", function(req, res) {
        // res.render("index")
        res.sendFile( path.resolve(__dirname, "../public/index.html"))
    })

    app.get("/loggedin", function(req, res) {
        // res.render("home")
        res.sendFile( path.resolve(__dirname, "../public/home.html"))
    })

    app.get("/shoppinglist", function(req, res) {
        //res.render("shoppingList")
        res.sendFile( path.resolve(__dirname, "../public/shoppingList.html"))
    })

    app.get("/useredit", function(req, res) {
        //res.render("user")
        res.sendFile( path.resolve(__dirname, "../public/user.html"))
    })

}