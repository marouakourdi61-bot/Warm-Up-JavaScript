const commandes = [
    { montant: 150, statut: "standard" },
    { montant: 620, statut: "standard" },
    { montant: 1200, statut: "premium" }
];

function calculerCommande(montant, statut) {

    let pourcentageRemise;

    if (montant < 200) {
        pourcentageRemise = 0;
    }
    else if (montant < 500) {
        pourcentageRemise = 5;
    }

    else if (montant < 1000) {
        pourcentageRemise = 10;
    }
    else {
        pourcentageRemise = 15;
    }


    // client premium bénéficie de 5 points 

    if (statut === "premium") {
        pourcentageRemise += 5;
    }

    // la remise totale ne peut jamaisdépasser 20 %

    pourcentageRemise = Math.min(pourcentageRemise, 20);

    //Calcule de remise

    const remise = montant * pourcentageRemise / 100;

    //total apres remise

    const totalApresRemise = montant - remise;

    //Calculer la livraison

    let livraison;

    if (totalApresRemise >= 300) {
        livraison = 0;
    } else {
        livraison = 30;
    }

    //Calculer total a payer

    const totalAPayer = totalApresRemise + livraison;
    return {
        montant:montant,
        pourcentageRemise: pourcentageRemise,
        remise: remise,
        totalApresRemise: totalApresRemise,
        livraison: livraison,
        totalAPayer: totalAPayer
    }
} 

console.log(calculerCommande(150, "standard"));

console.log(calculerCommande(620, "standard"));

console.log(calculerCommande(1200, "premium"));