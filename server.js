// constants for the server
const   express = require("express"),
        bodyParser = require("body-parser"),
        passport   = require('passport')
        morgan = require("morgan"),
        cookieParser = require("cookie-parser"),
        session = require('express-session'),
        env = require('dotenv').load(),
        // exphbs = require('express-handlebars'),
        app = express(),
        PORT = process.env.PORT || 3000,
        db = require("./models"),
        routes = require("./controllers/controller.js"),
        authroutes = require("./controllers/authController.js"),
        //Routes
        authRoute = require('./routes/auth.js')(app,passport);

// app use functionality
        app.use(express.static("public")); //required to properly handle css/js routing in public. 
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(routes); 
        app.use(morgan('dev'));
        app.use(cookieParser());
// For Passport
        app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
        app.use(passport.initialize());
        app.use(passport.session()); // persistent login sessions
//For Handlebars
        // app.set('views', './views')
        // app.engine('hbs', exphbs({
        // extname: '.hbs'
        // }));
// app.set('view engine', '.hbs');
// starts the Sequelize server 
        db.sequelize
          .sync( { force: false} )
          .then(() => app.listen(PORT,() => console.log("App listening on PORT " + PORT )))