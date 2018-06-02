const   express = require("express"),
        bodyParser = require("body-parser"),
        app = express(),
        PORT = process.env.PORT || 3000,
        exphbs = require("express-handlebars"),
        routes = require("./controllers/controller.js"),
        db = require("./models");

    // app use functionality
    app.use(express.static("public"));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.engine("handlebars", exphbs({ defaultLayout: "main" }));
    app.set("view engine", "handlebars");
    app.use(routes); 

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

// If Using Sequelize... 
// db.sequelize
//   .sync( { force: true} )
//   .then(() => app.listen(PORT,() => console.log("App listening on PORT " + PORT )))