const express = require('express');
const router = express.Router();

//handlerFonction
router.get('/', (req, res) => {
    res.send('😽Bienvenue sur notre site !🙀');
});

module.exports = router;