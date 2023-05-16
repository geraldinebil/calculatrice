

let nombre1 = 50;
let nombre2 = 22;
let nombre3 = 9;
let nombre4 = 38;

let somme = nombre1 + nombre2;
console.log(somme);

let soustraction = nombre3 - nombre4;
console.log(soustraction);

let multiplication = somme * soustraction;
console.log(multiplication)

let nombre = 42;
let estPair = nombre % 2 ===0;
console.log(estPair);


document.getElementById("resultat").innerHTML = somme;
document.getElementById("resultat").innerHTML = soustraction;
document.getElementById("resultat").innerHTML = multiplication;


