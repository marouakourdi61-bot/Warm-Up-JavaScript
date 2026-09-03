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
    let total = 0;

    for (let vente of ventes) {
        total = total + vente.montant;
    }

    return total;
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

function calculerMoyenne(ca) {
    let total = 0;
    let nombreVendeurs = 0;

    for (let vendeur in ca) {
        total = total + ca[vendeur];
        nombreVendeurs++;
    }

    return total / nombreVendeurs;
}

function trouverVendeursAuDessusMoyenne(caParVendeur, moyenne) {

    return Object.keys(caParVendeur).filter(vendeur => {
        return caParVendeur[vendeur] > moyenne;
    });
}

//Écris genererRapport(ventes) qui retourne le texte du rapport prêt à afficher
function genererRapport(ventes) {

    let total = calculerCATotal(ventes);

    let meilleure = trouverMeilleureVente(ventes);

    let ca = calculerCAParVendeur(ventes);

    let moyenne = calculerMoyenne(ca);

    let auDessus = trouverVendeursAuDessusMoyenne(ca, moyenne);

    let rapport = "=== RAPPORT DES VENTES ===\n";

    rapport = rapport + "Chiffre d'affaires total : " + total + " DH\n";

    rapport = rapport + "Meilleure vente : "
        + meilleure.produit
        + " (" + meilleure.vendeur + ") - "
        + meilleure.montant + " DH\n";

    rapport = rapport + "CA par vendeur :\n";

    for (let vendeur in ca) {
        rapport = rapport + "  "
            + vendeur
            + " : "
            + ca[vendeur]
            + " DH\n";
    }

    rapport = rapport + "Moyenne par vendeur : "
        + moyenne.toFixed(2)
        + " DH\n";

    rapport = rapport + "Au-dessus de la moyenne : "
        + auDessus.join(", ");

    return rapport;
}

console.log(genererRapport(ventes));