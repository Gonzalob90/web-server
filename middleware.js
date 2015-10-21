//use module exports to expore middleware

var middleware = {
	requireAuthentication: function(req, rest, next){
		console.log('private route hit');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	}
};

module.exports = middleware;