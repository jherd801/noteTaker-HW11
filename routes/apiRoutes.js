const router = require("express").Router();
const fs = require('fs');
const path = require('path');

// API route to get all notes
router.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
})

// API route to post a new note to db.json file
router.post('/api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;

        // Read current notes array prior to appending new note
        const notes = JSON.parse(data);
        notes.push(req.body);

        notes.forEach((item, index) => {
            item.id = index + 1;
        });

        // Write new notes json file
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
            if (err) throw err;
        });
    });

    res.sendStatus(200);
})

// API route to delete a note by ID
router.delete('/api/notes/:id', (req, res) => {

    // Read & parse json file for array index to remove
    fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (err, data) => {
        if (err) throw err;
        const targetId = req.params.id;
        const notes = JSON.parse(data);

        // Filter out the array object to delete & return remaining array objects
        let newNotesArray = notes.filter((obj) => {
            return obj.id != targetId;
        });

        // Write new notes json file
        fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(newNotesArray), (err) => {
            if (err) throw err;
        });
    });

    res.sendStatus(200);
})

module.exports = router;