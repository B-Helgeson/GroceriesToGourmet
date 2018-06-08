//ar exports = module.exports = {}
 
exports.signup = function(req, res) {
 
  res.sendFile( path.join(__dirname, "../public/index.html"));
 
};
exports.signin = function(req, res) {
 
  res.sendFile( path.join(__dirname, "../public/index.html"));

};