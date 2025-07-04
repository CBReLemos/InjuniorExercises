//fibonacci
function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    const ord = fibonacci(n - 1);
    ord.push(ord[ord.length - 1] + ord[ord.length - 2]);
    return ord;
  }
}
const n = parseInt(prompt("Digite um número inteiro positivo:"));
if (n === 0) {
  console.log([0]);
} else if (n === 1) {
  console.log([0]);
} else {
  console.log(fibonacci(n - 1));
}
