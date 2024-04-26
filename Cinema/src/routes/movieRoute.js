const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController.js');

router.post('/new', movieController.createMovie);
router.get('/', movieController.getMovies);
router.get('/:title', movieController.findMovieByName);
router.put('/:id', movieController.updateMovie);
router.delete('/:id', movieController.deleteMovieById);

module.exports = router;