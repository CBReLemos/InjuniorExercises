//idade
function verificarIdades(anosNascimento) {
  const anoAtual = parseInt(prompt("Digite o ano atual:"));
  const resultado = [];

  for (let ano of anosNascimento) {
    const idade = anoAtual - ano;
    if (idade >= 18) {
      resultado.push("maior");
    } else {
      resultado.push("menor");
    }
  }

  // Imprimir as mensagens
  resultado.forEach((status, index) => {
    console.log(`Pessoa ${index + 1}: ${status === 'maior' ? 'Maior de idade' : 'Menor de idade'}`);
  });

  return resultado;
}

// Exemplo de uso com anos fixos:
const anos = [2000, 2010, 2005, 1995];
verificarIdades(anos);
