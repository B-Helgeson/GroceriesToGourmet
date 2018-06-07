// constants for the server
const   express = require("express"),
        bodyParser = require("body-parser"),
        morgan = require("morgan"),
        cookieParser = require("cookie-parser"),
        app = express(),
        PORT = process.env.PORT || 3000,
        db = require("./models"),
        routes = require("./controllers/controller.js");

// app use functionality
        app.use(express.static("public")); //required to properly handle css/js routing in public. 
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(routes); 
        app.use(morgan('dev'));
        app.use(cookieParser());

// starts the Sequelize server 
        db.sequelize
          .sync( { force: true} )
          .then(() => app.listen(PORT,() => console.log("App listening on PORT " + PORT )))