# node.js et Express.js

environnement pour javascript coté serveur. 
gerer des operations async

# l'avis Concepteur : avantage coté serveur :
- **Equivalence de langage** (permet d'utiliser javascript coté client et serveur)
- **Modularité** permet aux dev de construire des app facile à maintenir et à feature.
- **Asynchronisme** Utilise les operations asynchrones non bloquantes,
                Permet d'envoyez des requetes sans etre bloquer dans une attente.
                Rend adapté aux app qui ont une manipulation simultanée de nombreuse connexions.
- **Scalabilité évolutif** , permet de gerer des app de grande Ampleur. 
- **Ideal pour les app en temps réel** avec une excellente prise en charge des chats en direct,
    des jeux en lignes, tableaux de bord de suivi en temps réel. 


# Express.Js
framework web minimaliste, rapide, flexible
Simplifie le dev d'app web et api avec Node.js
coté serveur

le module http : de gerer tout ce qui est protocolaire sur du web
Express inclu des methodes qui simplifie tout ça.

**Pourquoi Express avec Node ?**
- **Minimalisme** : laisse au dev la liberté de choisir et d'integrer des modules tiers selons leurs besoins specifiques.
- **Middlewares** : utilisation facile. Middleware -> traitement et standardisé les requetes back
                    fonction qui intervienne dans le cycle de vie des requêtes. Permet de gerer des tâches telles que
                    l'authentification, gestion de sessions, compression, etc.
- **Routage** : recuperation des requêtes avec simplification , facilitant la creation de points d'entrée.
- **Template** : Supporte divers moteurs de templates pour la generation dynamique de contenu html
                (Ejs, handeBars, pug(plus populaire))
- **Gestion des erreurs** : mécanismes pour la gestion des erreurs, facilitant le debogage et l'amelioration de la robustesse des app.

l'architecture d'express.js repose sur les fonctionnalités offert par Node.js
1La gestion des requete HTTP , 2la manipulation des event et 3le modèle non bloquant. 
A ne pas oublier : On peut pas utiliser Express.js en dehors de Node.js 

## Commencer avec Express
1. Install : npm install express
2. Creer une App Express : 
```js
const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('Hello')
})

app.listen(3000, ()=>{console.log("this is running on port 3000")});
```