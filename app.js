// Chiedere Nome
let nome = prompt('il tuo nome');
console.log (nome)

// Chedere Cognome
let cognome = prompt('il tuo cognome');
console.log (cognome)

// Chiedere colore
let colore = prompt('scgli un colore');
console.log (colore)

// Chiedere numero
let numero = prompt('scegli un numero');
console.log (numero)

// combinazione di tutti i prompt pre creare la "Password"
let newpassword = nome + cognome + colore + numero;
console.log(newpassword)
document.getElementById("password").innerHTML= newpassword;