
const produit = { nom: "Clavier mecanique", prix: 450, stock: 12, categorie: "Informatique" };

// Affiche une phrase récapitulative
console.log(`${produit.nom} - ${produit.prix} DH - ${produit.stock} en stock (${produit.categorie})`);

//Augmente le prix de 10 % et affiche le nouveau prix.
produit.prix = produit.prix * 1.10;
console.log(`Nouveau prix : ${produit.prix}`);

produit.enPromotion = false;

// Affiche toutes les paires clé 
for (const cle in produit) {
    console.log(`${cle} : ${produit[cle]}`);
}

// fonction estDisponible(produit)
function estDisponible(produit) {
    if (produit.stock > 0) { return true; }
    else {
        return false;

    }
}

console.log(`estDisponible(produit) -> ${estDisponible(produit)}`);
