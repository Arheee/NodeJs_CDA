ctrl + c ferme le serveur au sein du terminal

module qui gere les redemarage : nodemon
nodemon app.js au lieu de app.js

# Structure
src (source code) : routes, controllers, models
public (fichier statique) : css, js, images apres mettre express.static dans le app.js
views ( vues) : html
config ( configuration): passerelles vers la bdd , variables d'environnements (database.js, env.js)
middlewares : fonction middleware utilisée par express (authetication.js, errorhandling.js)
test

# API
interface d'applications pour communiquer entre elles.
API restFul http standard (get, post, put, delete), avec des données echangées en json généralement 
API SOAP xml

# les réponses http
200 : OK
201 : CREER
400 : mal formulée
401 : accès refusé , invalidité des info d'identification
404 : ressource non trouvée.

# Authentification 
garentis la sécurité. 
utilisation de clé d'API, de jetons d'accès ou d'authenfication basée sur les normes OAuth. 

Exemples 

GET /weather?city=Lille <= récup la meteo de Lille

handlerFunction
app.get('/', (req,res) =>{
    res.send("bienvenue");
})

catch all : * prend les routes qu'on ne peut pas anticipé. 

# Le routing
definit comment l'app répond a une demande en fonction de l'URL demandée , de la methode http (get, post, delete)

const userRouter = require(./routes);
app.use('./users', userRouter);

le routing dynamique , le path s'adapte à l'user.
'/user/:id' 
app.get('/user/:id', (req,res) =>{
    const userId = req.params.id;
    red.send(`info sur user ${userId}`);
})

decoupage : 
-routes 
    -index.js : rien de fonctionnel , juste la centralisation et ensuite balancer dans app.js
    -userRouter.js
    -bookRouter.js
    -productRouter.js
    -movieRouter.js

    routes/index.js
contiens les import express
utilisation des routeurs specifiques
module.exports = router;

    fichier principal app.js
const allRouters = require('./routes');

# CSRF / XSS
attaques courantes, qui peuvent compromettre la secu et l'integrité des données user

cross site request forgery
force un user a effectuer une action non intentionnelle sur un site web ou l'user est authentifié
cross site scripting
injection de script malveillants dans des pages web consultées par d'autre user. 

# middlewares
intercepte et renvoie
req, res et next
au niveau de l'app ou au niveau du routeur
utilisation avec la fonction use().

# MVC
Cest un modèle de conception utilisé en web
modèle <-> controleur <-> vue <-> user
vue : input
controleur : recup les requetes et fait le traitement
modèle : object , agis en tant que passerelle vers la data

# Views
pug : insertion de données, Reutilisation du code, logique de boucle, separation des préoccupations
npm install pug

pug fait du html sans balise

force : utilisation de layouts
layout.pug
index.pug 
