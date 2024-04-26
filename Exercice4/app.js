const readline = require("readline");
const data = require("./data.js");

const RED = "\x1b[31m";
const RESET_COLOR = "\x1b[0m";
//créer une interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//1. Le jeu doit poser une série de devinettes à l'utilisateur.
//penser a la meilleure facon de faire les choses 
const questions = 
    [{question: "Quel est la capitale de la France ?",answer: "Paris"},
    {question: "Quel est le plus grand océan de la planète ?",answer: "Pacifique"},
    {question: "Combien de continents y a-t-il sur Terre ?",answer: "6"}];



function game(index, name) {
    const riddles = questions[index];
    // interpolation de chaîne de caractères pour inclure la question dans le message
    rl.question(`${riddles.question} `, (userAnswer) => {
        // .trim ignore les espaces du debut et fin et .toLowerCase met en minuscule
        // .CharAt(0) recup juste la premiere lettre d'un mot 
        if (
            userAnswer.trim().toLowerCase() === riddles.answer.toLowerCase()
        ) {
            console.log("Bravo ! ");
        } else {
            console.log("Mauvaise réponse !");
            console.log("Retour au début du jeu .....");
            console.log(" LOOSER ");
        }
        //incrémentation de l'index
        if (index < questions.length - 1) {
            game(index + 1, name);
        } else {
            winnerPlayer(name);
        }
    });
}

// petit ajout perso pour avoir le nom du joueur
function winnerPlayer(name) {
    console.log(`waaaaah Félicitations ${name} ! Vous avez répondu correctement à toutes les devinettes.`);
    //interpolation
    // "/n" passer à la ligne
    console.log(`Votre score est de ${questions.length}/${questions.length}`);
    rl.close();
}


console.log("Bienvenue au jeu de devinettes !");

//Question nom du joueur et début du jeu avec appel de game()
rl.question("Quel est votre nom ? ", (name) => {
    console.log(`Bonjour, ${name} !`);

    console.log("Répondez aux questions suivantes :");

    game(0, name);
});