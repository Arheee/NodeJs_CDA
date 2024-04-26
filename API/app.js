// Importez la bibliothèque Express ici
const express = require('express');
const routes = require('./src/routes/index.js');
const path = require('path');
const app = express();


app.use('/', routes);
app.use(express.static( 'public'));

// Route pour la racine du proj
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'html', 'index.html'));
});


const port = 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});