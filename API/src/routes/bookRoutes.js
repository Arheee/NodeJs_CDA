const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// Route 1 - Liste des livres
router.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../data/livres.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Erreur lors de la lecture du fichier:", err);
            res.status(500).end();
            return;
        }

        res.json(JSON.parse(data));
    });
});


module.exports = router;
