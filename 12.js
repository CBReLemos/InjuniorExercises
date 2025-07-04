//Elemento unico
function lista(q) {
  let numeros = [];
  for (let i = 0; i < q; i++) {
    let n = parseInt(prompt(`Digite o ${i + 1}º número:`));
    numeros.push(n);
  }
  return numeros;
}
function encontrarElementoUnico(arr) {
  const cont = {};
  for (const num of arr) {
    cont[num] = (cont[num] || 0) + 1;
  }
  for (const num in cont) {
    if (cont[num] === 1) {
      alert(`Elemento único: ${num}`);
      return Number(num);
    }
  }
  alert("Nenhum elemento único encontrado.");
  return null;
}
const quant = parseInt(prompt("Quantos números deseja inserir?"));
const numeros = lista(quant);
alert(`Números digitados: [${numeros.join(", ")}]`);
encontrarElementoUnico(numeros);
