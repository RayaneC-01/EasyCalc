// Récupère l'élément HTML qui affiche le résultat des opérations
let display = document.getElementById('display');
// Fonction pour ajouter une valeur à l'affichage
function appendToDisplay(value) {
    // Vérifie si la dernière entrée est une opération mathématique et que la nouvelle valeur est également une opération mathématique
    const lastCharIsOperator = '+-*/%'.includes(display.value.slice(-1));
    const newCharIsOperator = '+-*/%'.includes(value);

    // Vérifie si l'utilisateur tente d'ajouter plusieurs opérateurs consécutifs
    if (lastCharIsOperator && newCharIsOperator) {
        // Ne fait rien si l'utilisateur tente d'ajouter plusieurs opérateurs consécutifs
        return;
    }

    // Ajoute la valeur à l'affichage
    display.value += value;
}


// Fonction pour effacer l'affichage
function clearDisplay() {
    display.value = ''; // Réinitialise la valeur de l'affichage à une chaîne vide
}

//fonction pour effacer le caractère précédent 
function deletePreviousCharacter() {
    // Récupère la valeur actuelle de l'affichage
    let currentValue = display.value;

    // Vérifie si l'affichage n'est pas vide
    if (currentValue.length > 0) {
        // Crée une nouvelle chaîne en enlevant le dernier caractère de la valeur actuelle
        let newValue = currentValue.slice(0, -1);

        // Met à jour l'affichage avec la nouvelle valeur
        display.value = newValue;
    }
}

// Fonction pour calculer le résultat de l'expression affichée
function calculateResult() {
    try {
        display.value = eval(display.value); // Évalue l'expression affichée et affiche le résultat
    } catch (error) {
        display.value = 'Error'; // En cas d'erreur, affiche "Error" dans l'affichage
    }
}
