// Ecouteur d'événement pour le formulaire avec l'ID "PMGC-calcul"
document.getElementById("PMGC-calcul").addEventListener("submit", function(event) {

    // Empêche le comportement par défaut du formulaire (soumission et rechargement de la page)
    event.preventDefault();
    console.log('Formulaire soumis');

    // Récupère les valeurs des champs du formulaire
    const sexe_value = document.getElementById('sexe').value;
    const age_value = document.getElementById('age').value;
    const taille_value = document.getElementById('taille').value;
    const poids_value = document.getElementById('poids').value;

    // Crée un tableau avec les valeurs des champs pour vérification
    const verif = [sexe_value, age_value, taille_value, poids_value]

    // Vérifie si un des champs est vide et affiche une alerte si c'est le cas
    if (verif.some((x) => x === "")) {
        alert('Veuillez remplir tous les champs du formulaire.');
        return;
    }

    // Assigne les valeurs des champs à des variables et les convertit en nombres
    const sexe = verif[0];
    const age = parseInt(verif[1]);
    const taille = parseFloat(verif[2].replace(",","."));
    const poids = parseFloat(verif[3]);

    // Affiche les valeurs avant le calcul de l'IMC dans la console (visible sur chrome)
    console.log('Valeurs avant calcul IMC :');
    console.log('Sexe:', sexe);
    console.log('Age:', age);
    console.log('Taille :', document.getElementById('taille').value);
    console.log('Poids:', poids);

    // Calcule l'IMC
    const imc = (poids / (taille * taille));
    console.log('IMC calculé:', imc);

    // Détermine la valeur du sexe (1 pour homme, 0 pour femme)
    const sexeValue = (sexe === 'homme' ) ? 1 : 0 ;

    // Calcule le pourcentage de masse grasse corporelle en utilisant la formule de Deurenberg
    let masseGrasse = (1.20 * imc) + (0.23 * age) - (10.8 * sexeValue) - 5.4;

    // Affiche le pourcentage de masse grasse corporelle dans la console
    console.log('Masse Grasse:', masseGrasse);

   let résultat ="";
    // Détermine la catégorie de masse grasse en fonction de l'âge et du sexe et assigne un message au résultat
    if (sexe === 'femme') {
        if (age >= 20 && age <= 39) {
            if (masseGrasse < 21) resultat = 'en santé faible';
            else if (masseGrasse <= 31) resultat = 'en bonne santé';
            else if (masseGrasse <= 39) resultat = 'en surpoids';
            else resultat = 'en obésité';
        } else if (age >= 40 && age <= 59) {
            if (masseGrasse < 23) resultat = 'en santé faible';
            else if (masseGrasse <= 36) resultat = 'en bonne santé';
            else if (masseGrasse <= 40) resultat = 'en surpoids';
            else resultat = 'en obésité';
        } else if (age >= 60) {
            if (masseGrasse < 25) resultat = 'en santé faible';
            else if (masseGrasse <= 37) resultat = 'en bonne santé';
            else if (masseGrasse <= 42) resultat = 'en surpoids';
            else resultat = 'en obésité';
        }
    } else if (sexe === 'homme') {
            if (age >= 20 && age <= 39) {
                if (masseGrasse < 8) resultat = 'en santé faible';
                else if (masseGrasse <= 19) resultat = 'en bonne santé';
                else if (masseGrasse <= 25) resultat = 'en surpoids';
                else resultat = 'en obésité';
            } else if (age >= 40 && age <= 59) {
                if (masseGrasse < 11) resultat = 'en santé faible';
                else if (masseGrasse <= 22) resultat = 'en bonne santé';
                else if (masseGrasse <= 28) resultat = 'en surpoids';
                else resultat = 'en obésité';
            } else if (age >= 60) {
                if (masseGrasse < 15) resultat = 'en santé faible';
                else if (masseGrasse <= 25) resultat = 'en bonne santé';
                else if (masseGrasse <= 30) resultat = 'en surpoids';
                else resultat = 'en obésité';
            }
    }
  
    // Affiche le pourcentage de masse grasse corporelle dans la console et en alerte (visible sur chrome)
    console.log(`Votre pourcentage de masse grasse corporelle est de ${masseGrasse}%. Vous etes ${resultat}`);
    alert(`Votre pourcentage de masse grasse corporelle est de ${masseGrasse.toFixed(2)}%. Vous etes ${resultat}`);
});