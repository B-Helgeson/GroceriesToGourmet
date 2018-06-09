// constants for the server
const   express = require("express"),
        app = express(),
        passport   = require('./config/passport/passport'),
        session = require('express-session'),
        bodyParser = require("body-parser"),
        env = require('dotenv').load(),
        morgan = require("morgan"),
        cookieParser = require("cookie-parser"),
        // exphbs = require('express-handlebars'),
        PORT = process.env.PORT || 3000,
        db = require("./models"),
        routes = require("./controllers/controller.js");

// app use functionality
        app.use(express.static("public")); //required to properly handle css/js paths
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
        // .query('SET FOREIGN_KEY_CHECKS = 0', null, {raw: true}) // These four lines:   1
        // .then(function(results) { // Are being used to drop then rebuild the database  2
        // db.sequelize.sync({force: true}) // Because of updated table structure         3
        // }) // Comment these lines out later, then comment in the line below            4
        .sync( { force: false} ) //Comment this back in to retain data!
        .then(() => app.listen(PORT,() => console.log("App listening on PORT " + PORT )))