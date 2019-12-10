// Required npm package
var express = require('express');
var app = express();
var port = process.env.PORT || 8080; // heroku used port with the process.env.Port when ran locally use port 8080

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);  
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, function() {
	console.log("App listening on port: " + port);
});