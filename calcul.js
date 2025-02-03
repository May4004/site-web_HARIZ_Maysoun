// Récupère le formulaire avec l'ID "IMC-calcul"
const form=document.getElementById("IMC-calcul");
// Ecouteur d'événement pour la soumission du formulaire
form.addEventListener("submit", function(event) { 
    // Empêche le comportement par défaut du formulaire (soumission et rechargement de la page)
    event.preventDefault();

    // Récupère et filtre les valeurs des champs du formulaire
    const zone1 = document.getElementById("zone1").value.trim();
    const zone2 = document.getElementById("zone2").value.trim();

    // Définition des expressions pour vérifier les entrées numériques
    const regex = /^[0-9.,]+$/;

    // Vérifie si les champs sont vides et affiche une alerte si c'est le cas
    if (zone1 === "" || zone2 === "") {
        alert('Veuillez remplir tous les champs du formulaire.');

    // Vérifie si les champs contiennent uniquement des chiffres, des points ou des virgules 
    } else if (!regex.test(zone1) || !regex.test(zone2)) {
        alert('Les champs doivent contenir uniquement des chiffres, des points ou des virgules.')

    // Vérifie si le champ taille contient une virgule 
    } else if (!zone2.includes(',')) {
        alert('Le champ taille doit contenir une virgule.');
    
    // Si toutes les vérifications sont passées, calcule l'IMC  
    } else {
    // Convertit les valeurs des champs en nombres 
        const poids = parseFloat(zone1.replace(",","."));
        const taille = parseFloat(zone2.replace(",","."));
         // Calcule l'IMC
        const IMC = poids / (taille * taille);

        // Affiche l'IMC calculé dans une alerte
        alert(`Votre IMC est de ${IMC.toFixed(2)}`);

    }
});

