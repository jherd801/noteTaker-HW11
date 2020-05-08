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
        res.json(true)
    });
};