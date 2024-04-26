const mongoose = require('mongoose');

const movieModel = new mongoose.Schema({
  title: {type: String,required: true },
  description: {type: String,required: true },
  director: {type: String,required: true},
  releaseDate: {type: Date,required: true}
});

const Movie = mongoose.model('Movie', movieModel);

module.exports = Movie;
