var express = require("express");

var app = express();

// Setting the PORT
var PORT = process.env.PORT || 3030;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// // API and HTML routes
app.use(require("./routes/apiRoutes.js"));
app.use(require("./routes/htmlRoutes.js"));


// Listener to start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});




