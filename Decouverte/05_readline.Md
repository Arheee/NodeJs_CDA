
methode createInterface pour creer l'interface
process.stdin pour l'entrée
process.stdout pour la sortie

# question()
methode pour poser une question à l'user. 
rl.question('la question', (reponse) =>{
    console.log();
    rl.close();
})

# Close()
fermer l'interface readline, une fois que vous avez terminé

# Evenements
les plus utilisés sont line et close
reception d'une ligne de texte ou la fermeture de l'interface

rl.on declenche
rl.on('line', (input) =>{console.log()})

En résumé, on importe le readline, on le configure, on pose la question, puis on ferme le readline 🐙