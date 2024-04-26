const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const movieRoutes = require('./src/routes/movieRoute.js'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());

// Connexion à la base de données MongoDB
mongoose.connect('mongodb://localhost:27017/cinema',
 { useNewUrlParser: true,
   useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
});


app.use('/movie', movieRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});