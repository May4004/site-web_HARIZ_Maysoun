const form=document.getElementById("IMC-calcul");
form.addEventListener("submit", function(event) { 
    event.preventDefault();
    const zone1 = document.getElementById("zone1").value.trim();
    const zone2 = document.getElementById("zone2").value.trim();
    const regex = /^[0-9.,]+$/;
    if (zone1 === "" || zone2 === "") {
        alert('Veuillez remplir tous les champs du formulaire.');
    } else if (!regex.test(zone1) || !regex.test(zone2)) {
        alert('Les champs doivent contenir uniquement des chiffres, des points ou des virgules.')
    } else if (!zone2.includes(',')) {
        alert('Le champ taille doit contenir une virgule.');
    } else {
        const poids = parseFloat(zone1.replace(",","."));
        const taille = parseFloat(zone2.replace(",","."));
        const IMC = poids / (taille * taille);
        alert(`Votre IMC est de ${IMC.toFixed(2)}`);

    }
});

