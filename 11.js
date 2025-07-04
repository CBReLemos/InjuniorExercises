//ordemCrescente
const quant = parseInt(prompt("Quantos números deseja inserir?"));
let numeros = [];
for (let i = 0; i < quant; i++) {
  let n = parseInt(prompt(`Digite o ${i + 1}º número:`));
  numeros.push(n);
}
let cont = 0;
for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > numeros[i - 1]) {
    cont++;
  }
}
alert(`Lista: [${numeros.join(", ")}]`);
alert(`A quantidade de numeros em ordem crescente em relacao ao anterior é: ${cont}`);
