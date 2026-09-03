const ventes = [
    { vendeur: "Amina", produit: "Ordinateur portable", montant: 8500, mois: "janvier" },
    { vendeur: "Youssef", produit: "Smartphone", montant: 4200, mois: "janvier" },
    { vendeur: "Amina", produit: "Casque audio", montant: 900, mois: "fevrier" },
    { vendeur: "Sara", produit: "Tablette", montant: 3100, mois: "fevrier" },
    { vendeur: "Youssef", produit: "Clavier", montant: 450, mois: "mars" },
    { vendeur: "Sara", produit: "Ecran 27 pouces", montant: 2600, mois: "mars" }
];

//Calcule le chiffre d'affaires total de l'équipe
function calculerCATotal(ventes) {
    return ventes.reduce((total, vente) => {
        return total + vente.montant;
    }, 0);
}

// Trouve la vente la plus élevée (produit, vendeur et montant)

function trouverMeilleureVente(ventes) {
    return ventes.reduce((meilleure, vente) => {
        if (vente.montant > meilleure.montant) {
            return vente;
        }

        return meilleure;
    });
}

// Construis un objet caParVendeur associant chaque vendeur à son chiffre d'affaires

function calculerCAParVendeur(ventes) {
    return ventes.reduce((ca, vente) => {

        if (!ca[vente.vendeur]) {
            ca[vente.vendeur] = 0;
        }

        ca[vente.vendeur] += vente.montant;

        return ca;
    }, {});
}

//Calcule la moyenne par vendeur, puis liste ceux qui sont au-dessus de cette moyenne

function calculerMoyenneParVendeur(caParVendeur) {
    const vendeurs = Object.values(caParVendeur);

    const total = vendeurs.reduce((somme, ca) => {
        return somme + ca;
    }, 0);

    return total / vendeurs.length;
}

function trouverVendeursAuDessusMoyenne(caParVendeur, moyenne) {

    return Object.keys(caParVendeur).filter(vendeur => {
        return caParVendeur[vendeur] > moyenne;
    });
}

//Écris genererRapport(ventes) qui retourne le texte du rapport prêt à afficher
function genererRapport(ventes) {
    
}