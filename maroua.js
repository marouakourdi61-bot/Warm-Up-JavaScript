const commandes = [
    { montant: 150, statut: "standard" },
    { montant: 620, statut: "standard" },
    { montant: 1200, statut: "premium" }
];


function calculerCommande(montant,statut){
    let pourcentageRemise;
    
    if (montant < 200){
        pourcentageRemise = 0;
    }
    else if(montant < 500){
        pourcentageRemise = 5;
    }
    else if(montant < 1000){
        pourcentageRemise = 10;
    }
    else{
        pourcentageRemise = 15;
    }

    if(statut = "premium"){
        pourcentageRemise += 5;
    }

    pourcentageRemise = Math.min(pourcentageRemise, 20);

    const remise = montant *
}