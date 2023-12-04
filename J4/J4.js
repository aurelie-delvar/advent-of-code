const fs = require('fs');
const readline = require('readline');
const nomFichier = 'J4/input.txt';

function lireFichierLigneParLigne(nomFichier) {
    const lecteur = readline.createInterface({
        input: fs.createReadStream(nomFichier),
        crlfDelay: Infinity 
    });

    let total = 0;
    lecteur.on('line', (ligne) => {

        // pour chaque ligne, isoler les nbs gagnants + les nbs que j'ai
        const pattern = /Card\s+\d+:(\s*\d+(\s+\d+)*)\s*\|\s*(\d+(\s+\d+)*)/;
        const match = ligne.match(pattern);

        if(match) {
            const leftNumbers = match[1].trim().split(/\s+/).map(Number);
            const rightNumbers = match[3].trim().split(/\s+/).map(Number);

            // les comparer et récup le nb de matches
            let winningArray = [];
            rightNumbers.forEach((number) => {
                if(leftNumbers.includes(number) && number !== '' && !isNaN(number)) {
                    winningArray.push(number);
                }
            });

            // compter les points
            let totalLigne = 0;

            if(winningArray.length === 0) {
                totalLigne = 0;
            } else if(winningArray.length === 1) {
                totalLigne = 1;
            } else {
                totalLigne = 1;
                for(let i = 1; i < winningArray.length; i++) {
                    totalLigne *=2;
                }
            }

        // faire le total
        total += totalLigne;
        console.log(total);

        }

    });

}

lireFichierLigneParLigne(nomFichier);