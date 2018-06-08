var authController = require('../controllers/controller.js');
 
module.exports = function(app) {
 
    app.get('/signup', authController.signup);
 
}