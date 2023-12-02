const map = {
    'one': 1,
    'two': 2,
    'three': 3,
    'four': 4,
    'five': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'nine': 9,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9
};

const fs = require('fs');
const readline = require('readline');
const nomFichier = 'J1/input.txt';

function lireFichierLigneParLigne(nomFichier) {
    // Créer une interface de lecture
    const lecteur = readline.createInterface({
        input: fs.createReadStream(nomFichier),
        crlfDelay: Infinity // Détection automatique des fins de ligne
    });

    let total = 0;
    lecteur.on('line', (ligne) => {
        // Faire quelque chose avec chaque ligne (par exemple, l'afficher dans la console)
        console.log(ligne);

        let firstValue = 0;
        let firstIndex = Infinity;
        let lastValue = 0;
        let lastIndex = -1;

        for (const number in map) {
            let index = ligne.indexOf(number);

            if(index !== -1 && index < firstIndex) {
                firstValue = map[number];
                firstIndex = index;                
            }

            index = ligne.lastIndexOf(number);
            if(index !== -1 && index > lastIndex) {
                lastValue = map[number];
                lastIndex = index;
            }
        }
        const finalValue = firstValue + '' + lastValue;
        console.log(finalValue);
        total += parseInt(finalValue);

        console.log(total);
    });

}

lireFichierLigneParLigne(nomFichier);