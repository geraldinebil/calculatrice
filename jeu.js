function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  var randomNumber = generateRandomNumber(1, 100);
  console.log(randomNumber);

  var randomNumbers = [];
  for (var i = 0; i < 10; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100));
  }
  console.log(randomNumbers);

  var propositions = [];
for (var i = 0; i < 100; i++) {
  var randomNumber = Math.floor(Math.random() * 100) + 1; 
  propositions.push(randomNumber);
}
console.log(propositions);

var numberToGuess = 42; 
var userGuess = prompt("Devinez le nombre !"); 

if (userGuess == numberToGuess) { 
  console.log("Bravo ! Vous avez deviné le nombre !"); 
} else {
  console.log("Dommage, ce n'est pas le bon nombre..."); 
}
