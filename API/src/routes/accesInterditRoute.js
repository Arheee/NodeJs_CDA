const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(403).send("Accès interdit !");
});

module.exports = router;