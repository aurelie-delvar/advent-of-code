const fs = require('fs');
const readline = require('readline');
const nomFichier = 'J2/input.txt';

function lireFichierLigneParLigne(nomFichier) {
    // Créer une interface de lecture
    const lecteur = readline.createInterface({
        input: fs.createReadStream(nomFichier),
        crlfDelay: Infinity // Détection automatique des fins de ligne
    });

    let total = 0;
    lecteur.on('line', (ligne) => {

        // je crée une regex pour matcher toutes les occurences de "red" + 2 caractères avant 
        const colorRegex = /(\d+)\s(red|green|blue)/g;

        let array;
        // je boucle tant que la regex matche des résultats
        while((array = colorRegex.exec(ligne)) !== null) {

            // si la couleur est supérieure à celle de l'énoncé, j'arrête
            if(array[2] === "red") {
                if(array[1] > 12) {
                    return;
                }
            }

            if(array[2] === "green") {
                if(array[1] > 13) {
                    return;
                }
            }

            if(array[2] === "blue") {
                if(array[1] > 14) {
                    return;
                }
            }

        }

        // j'isole les numéros de game des résultats et je les additionne
        const gamesNumber = ligne.match(/Game (\d+):/);
        total += parseInt(gamesNumber[1]);
        console.log(total);
    });

}

lireFichierLigneParLigne(nomFichier);