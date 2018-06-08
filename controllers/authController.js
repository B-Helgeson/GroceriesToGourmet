//ar exports = module.exports = {}
 
exports.signup = function(req, res) {
 
  res.sendFile( path.join(__dirname, "../public/index.html"));
 
};
exports.signin = function(req, res) {
 
  res.sendFile( path.join(__dirname, "../public/index.html"));

};
exports.dashboard = function(req,res){

	res.render('dashboard'); 

};
exports.logout = function(req,res){

  req.session.destroy(function(err) {
  res.redirect('/');
  })
};