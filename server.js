    // constants for the server
const   express = require("express"),
        bodyParser = require("body-parser"),
        app = express(),
        PORT = process.env.PORT || 3000,
        db = require("./models");

    // app use functionality
        app.use(express.static("public"));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(routes); 


    // Starts the Sequelize Server 
        db.sequelize
          .sync( { force: true} )
          .then(() => app.listen(PORT,() => console.log("App listening on PORT " + PORT )))