// constants for the server
const   express = require("express"),
        bodyParser = require("body-parser"),
        app = express(),
        PORT = process.env.PORT || 3000,
        db = require("./models"),
        routes = require("./controllers/controller.js");

app.use(routes);

// app use functionality
        app.use(express.static("public")); //required to properly handle css/js routing in public. 
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(routes); 

// // various route handling
//         require("./routes/html-routes.js")(app);
//         require("./routes/db-routes.js")(app);
//         require("./routes/api-routes.js")(app);

// starts the Sequelize server 
        db.sequelize
          .sync( { force: true} )
          .then(() => app.listen(PORT,() => console.log("App listening on PORT " + PORT )))