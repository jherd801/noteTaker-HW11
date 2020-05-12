var dbData = require("../../db/db");

// API routes
module.exports = function(app) {

    // API GET Request
    app.get("/api/notes", function(req, res) {
      res.json(dbData);
    });

    // API POST Request
    app.post("/api/notes", function(req, res) {
        dbData.push(req.body);
        console.log(dbData);
        // fs.append
        res.json(true);
    });
};


//var fs = require("fs");

// we add a newline character to the command line argument
// fs.appendFile("log.txt", process.argv[2] + '\n', function(err) {

//     if (err) {
//       console.log(err);
//     }
//     else {
//       console.log("Commit logged!");
//     }
  
//   });

  