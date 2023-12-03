const fs = require('fs');
const readline = require('readline');
const nomFichier = 'J2/input.txt';

function lireFichierLigneParLigne(nomFichier) {
    // Créer une interface de lecture
    const lecteur = readline.createInterface({
        input: fs.createReadStream(nomFichier),
        crlfDelay: Infinity // Détection automatique des fins de ligne
    });

    // j'initialise mon résultat final à 0
    let total = 0;

    lecteur.on('line', (ligne) => {

        // j'initialise à 0 les variables qui vont stocker le + grand nb pour chaque couleur
        let biggestRed = 0;
        let biggestGreen = 0;
        let biggestBlue = 0;

        // je crée une regex pour matcher toutes les occurences de couleurs + le nombre avant 
        const colorRegex = /(\d+)\s(red|green|blue)/g;

        // j'initialise l'array qui va contenir les résultats de la regex
        let array;

        // je boucle tant que la regex matche des résultats
        while((array = colorRegex.exec(ligne)) !== null) {

            // si la couleur est rouge, je compare l'occurence avec le + grand nb déjà stocké
            if(array[2] === "red") {
                let currentRed = parseInt(array[1]);
                if(currentRed > biggestRed) {
                    biggestRed = currentRed;
                }
            }

            if(array[2] === "green") {
                let currentGreen = parseInt(array[1]);
                if(currentGreen > biggestGreen) {
                    biggestGreen = currentGreen;
                }
            }

            if(array[2] === "blue") {
                let currentBlue = parseInt(array[1]);
                if(currentBlue > biggestBlue) {
                    biggestBlue = currentBlue;
                }
            }
        }

        // je multiplie les plus grands nbs ensemble
        let multiply = biggestRed * biggestBlue * biggestGreen;

        // puis j'additionne les résultats des multiplications
        total += multiply; 

    });

}

lireFichierLigneParLigne(nomFichier);