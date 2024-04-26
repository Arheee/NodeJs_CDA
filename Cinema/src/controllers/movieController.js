const Movie = require('../models/movie.js');

// creer un film 
// POST
exports.createMovie = async (req, res) => {
  try {
    const { title, description, director, releaseDate } = req.body;
    const newMovie = await Movie.create({ title, description, director, releaseDate });
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//trouver tout les films
// GET
exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// trouver un film avec son nom 
// GET
exports.findMovieByName = async (req, res) => {
    try {
      const { title } = req.params;
      const movie = await Movie.findOne({ title });
      if (!movie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

 // modifier et mettre a jour un film avec son id
 // PUT
exports.updateMovie = async (req, res) => {
    try {
      const { id } = req.params;
      const { title, description, director, releaseDate } = req.body;
      const updatedMovie = await Movie.findOneAndUpdate(
        { _id: id },
        { title, description, director, releaseDate },
        { new: true }
      );
      if (!updatedMovie) {
        return res.status(404).json({ message: "Movie not found" });
      }
      res.json(updatedMovie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Supprimer un film
  // DELETE
  exports.deleteMovieById = async(req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if(!movie){
            return res.status(404).json({ message: "Movie not found"});
        } 
    res.json({ message: 'The movie is delete with success' });  
    }catch (error){
            res.status(500).json({error: error.message});
     }
};