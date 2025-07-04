//palindromo
const fr = prompt("Digite uma frase:");
const frFormat = fr.toLowerCase().replace(/\s+/g, '');

if (frFormat === frFormat.split('').reverse().join('')) {
  console.log("É um palíndromo.");
} else {
  console.log("Não é um palíndromo.");
}
