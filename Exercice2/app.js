const path = require('path');
const rapportPath = path.join('documents', 'rapport.txt');
console.log(rapportPath);
//
//   - Utilisez la méthode `path.resolve` pour obtenir le chemin absolu du fichier "rapport.txt" créé précédemment.
const cheminAbsolu = path.resolve('rapport.txt');
console.log("le chemin est ", cheminAbsolu);


//
//  - Utilisez la méthode `path.extname` pour vérifier si le fichier a une extension ".txt".
const extension = path.extname(cheminAbsolu);

if (extension === '.txt') {
    console.log("Le fichier a l'extension '.txt'.");
} else {
    console.log("Le fichier n'a pas l'extension '.txt'.");
}

//
//  - Utilisez la méthode `path.dirname` pour obtenir le répertoire du fichier "rapport.txt".
const repertoire = path.dirname(cheminAbsolu)
console.log("le repertoire est ", repertoire);

//
//  - Utilisez la méthode `path.basename` pour extraire le nom du fichier (sans l'extension) à partir du chemin absolu.
const nomFichier = path.basename(cheminAbsolu);
console.log("le nom est ", nomFichier);

//
// - Utilisez la méthode `path.parse` pour obtenir un objet avec les détails du chemin du fichier "rapport.txt" (répertoire, base, nom, extension, etc.)
const detailsChemin = path.parse(cheminAbsolu);
console.log("le detail du chemin ", detailsChemin);


// Normalisation du chemin
const cheminNormalise = path.normalize('documents//rapport.txt');
console.log("Chemin normalisé :", cheminNormalise);