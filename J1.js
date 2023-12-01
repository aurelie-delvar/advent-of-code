const fs = require('fs');
const readline = require('readline');
const nomFichier = './input.txt';

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

        const firstNumber = ligne.match(/\d/);
        const lastNumber = ligne.match(/\d(?=\D*$)/);
        const finalNumber = firstNumber + lastNumber;
        total += parseInt(finalNumber);

        console.log(total);
    });
}

lireFichierLigneParLigne(nomFichier);