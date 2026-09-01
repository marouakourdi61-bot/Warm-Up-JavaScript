
const courses = ["pain", "lait", "riz", "cafe"];

courses.push("sucre");

//Retirer "lait"
const positionLait = courses.indexOf("lait");

if (positionLait !== -1) {
    courses.splice(positionLait, 1);
}

//Afficher le nombre restant

console.log(`Nombre d'articles : ${courses.length}`);


for (let i = 0; i < courses.length; i++) {
    console.log(`${i + 1}. ${courses[i]}`);
}

//cafe
const positionCafe = courses.indexOf("cafe");
if (positionCafe !== -1) {
    console.log("Le cafe est bien dans la liste.");
} else {
    console.log("Le cafe n'est pas dans la liste.");

}