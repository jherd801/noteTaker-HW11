var express = require("express");
var fs = require("fs");

var app = express();

// Setting the PORT
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Link to API and HTML route files
require("./public/routes/apiRoutes")(app);
require("./public/routes/htmlRoutes")(app);

// Middleware code to serve static files in public directory
app.use(express.static('public'));

// Listener to start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});




