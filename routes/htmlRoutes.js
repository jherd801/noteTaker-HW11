const express = require('express');
const path = require('path');
const router = express.Router();

//HTML GET to display currently saved notes
router.get('/notes', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/notes.html'));
})

// If no matching route is found default to index
router.get('*', (req, res) => {
    res.status(200);
    res.sendFile(path.join(__dirname, '../public/index.html'));
})


module.exports = router;