const express = require('express');
const router = express.Router();

const bienvenueRoute = require('./bienvenueRoute');
const infoRoute = require('./infoRoute');
const accesInterditRoute = require('./accesInterditRoute');
const redirectionAccueilRoute = require('./redirectionAccueilRoute');
const bookRoutes = require('./bookRoutes');


router.use('/livres', bookRoutes);
router.use('/bienvenue', bienvenueRoute);
router.use('/info', infoRoute);
router.use('/acces-interdit', accesInterditRoute);
router.use('/redirection-accueil', redirectionAccueilRoute);

module.exports = router;