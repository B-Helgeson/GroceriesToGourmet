var authController = require('../controllers/authController.js');
 
module.exports = function(app,passport) {
 
    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
 
    // app.post('/signup', passport.authenticate('local-signup',  { successRedirect: '/dashboard',
    // failureRedirect: '/signup'}
    // ));


// app.get('/dashboard',isLoggedIn, controller.dashboard);


// app.get('/logout',controller.logout);


// app.post('/signin', passport.authenticate('local-signin',  { successRedirect: '/dashboard',
//     failureRedirect: '/signin'}
//     ));


// function isLoggedIn(req, res, next) {
// if (req.isAuthenticated())
// return next();

// res.redirect('/signin');
// }


}