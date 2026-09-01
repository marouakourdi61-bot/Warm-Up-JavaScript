const panier = [
    { nom: "Souris", prix: 150, quantite: 2 },
    { nom: "Casque", prix: 400, quantite: 1 },
    { nom: "Tapis", prix: 60, quantite: 3 },
    { nom: "Webcam", prix: 520, quantite: 1 }
];

//uniquement les noms

const noms = panier.map(article => article.nom);

console.log("Noms :", noms);

// contenant le nom et le total de la ligne 

const totauxLignes = panier.map(article => ({
    nom: article.nom,
    total: article.prix * article.quantite
}));

console.log("Totaux lignes :", totauxLignes);

// récupère les articles dont le prix unitaire dépasse 100 DH
const articlesPrixEleve = panier.filter(article => article.prix > 100);

console.log("Prix > 100 :", articlesPrixEleve.map(article => article.nom));

// calcule le montant total du panier

const totalPanier = panier.reduce(
    (total, article) => total + article.prix * article.quantite,
    0
);

console.log(`Total panier : ${totalPanier} DH`);

// calcule le nombre total d'articles (somme des quantités)

const nombreArticles = panier.reduce(
    (total, article) => total + article.quantite, 0
);

console.log(`Nombre d'articles : ${nombreArticles}`);
