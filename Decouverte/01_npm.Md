# Installation 
Verifier la version de npm et Node : npm -v et node -v

# Gestion de dépendances
Permet d'installer des bibliotheques tierces asap package
On peut les trouver dans le fichier `package.json` 
Et npm les installe de maniere hierarchiquedans le `node_modules`

# Intialisation du projet 
npm init
les dev peuvent creer un fichier package.json

# Installation de packages
npm install
local : npm install nomPackage
global : npm install -g nomPackage 

c'est mieux d'utiliser le locale pour les dep specifique et l'installation globale pour les outils généraux. 

# Script
"script":{"start": "node index.js"}
la commande node indique sau systeme dexe le fichier

Package lock ? 
package-lock.json : généré par npm , enregistre l'etat des dependances d'un projet Node.js
                    emprunte temporel du projet