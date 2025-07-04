 // inteiro positivo
function fatores(f) {
    for (let i = f; i > 0; i--) {
        console.log(i);
    }
}

let r = prompt('Quer calcular o fatorial de um número? (s/n): ');

while (r !== 'n' && r !== 'N') {
    if (r === 's' || r === 'S') {
        let n = parseInt(prompt('Digite um número:'));
        if (n > 0) {
            fatores(n);
        } else {
            alert('Número inválido! Digite um número maior que zero.');
        }
    } else {
        alert('Não entendi');
    }
    r = prompt('Quer calcular o fatorial de um número? (s/n): ');
}
