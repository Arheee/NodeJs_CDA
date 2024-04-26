const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const info = {
        nom: "John Doe",
        age: 30,
        ville: "Paris"
    };
    res.json(info);
});

module.exports = router;