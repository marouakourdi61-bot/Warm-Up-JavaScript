const inscription = {
    nom: "",
    email: "aminaexample.com",
    motDePasse: "123",
    age: 17
};

function validerInscription(donnees) {
    const erreurs = [];

    //verifier le nom

    if (donnees.nom.length < 2) {
        erreurs.push("Le nom doit contenir au moins 2 caracteres.");
    }

    //verifier l'email

    if (!donnees.email.includes("@") || !donnees.email.includes(".")) {
        erreurs.push("L'email n'est pas valide.");
    }

    //verifier mot de pass

    if (donnees.motDePasse.length < 8) {
        erreurs.push("Le mot de passe doit contenir au moins 8 caracteres.");
    }

    //verfier age

    if (donnees.age < 18) {
        erreurs.push("Vous devez avoir au moins 18 ans.");
    }

    const valide = erreurs.length === 0;

    return { valide: valide, erreurs: erreurs };
}

console.log(validerInscription(inscription));