//time de futebol
const time = [];
function adicionarJogador() {
  const nome = prompt("digite o nome:");
  const idade = parseInt(prompt("idade"));
  const posicao = prompt("posição:");
  const pontuacao = parseFloat(prompt("pontuação"));
  if (!nome || isNaN(idade) || !posicao || isNaN(pontuacao)) {
    alert("Dados inválidos. Tente novamente.");
    return;
  }
  const jogador = {
    nome,
    idade,
    posicao,
    pontuacao
  };
  time.push(jogador);
  alert(`Jogador ${nome} adicionado com sucesso!`);
}
function buscarPorPosicao() {
  const posicaoBusca = prompt("Digite a posição para buscar jogadores:");
  if (!posicaoBusca) {
    alert("Posição inválida.");
    return;
  }
  const jogadoresEncontrados = time.filter(jogador => jogador.posicao.toLowerCase() === posicaoBusca.toLowerCase());
  if (jogadoresEncontrados.length === 0) {
    alert(`Nenhum jogador encontrado na posição "${posicaoBusca}".`);
  } else {
    let lista = `Jogadores na posição "${posicaoBusca}":\n`;
    jogadoresEncontrados.forEach(jogador => {
      lista += `- ${jogador.nome}, ${jogador.idade} anos, pontuação: ${jogador.pontuacao}\n`;
    });
    alert(lista);
  }
}
function listarTime() {
  if (time.length === 0) {
    console.log("Nenhum jogador cadastrado no time.");
  } else {
    console.log("Lista de jogadores do time:");
    time.forEach((jogador, index) => {
      console.log(`${index + 1}. Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`);
    });
  }
}
function calcularPontuacaoMedia() {
  if (time.length === 0) {
    alert("Nenhum jogador cadastrado para calcular a pontuação média.");
    return;
  }
  const soma = time.reduce((acc, jogador) => acc + jogador.pontuacao, 0);
  const media = soma / time.length;
  alert(`Pontuação média do time: ${media.toFixed(2)}`);
}
function menu() {
  let opcao;
  do {
    opcao = prompt(
      "Menu:\n" +
      "1 - Adicionar jogador\n" +
      "2 - Buscar por posição\n" +
      "3 - Listar time\n" +
      "4 - Calcular pontuação média\n" +
      "5 - Sair\n" +
      "Escolha uma opção:"
    );
    switch (opcao) {
      case "1":
        adicionarJogador();
        break;
      case "2":
        buscarPorPosicao();
        break;
      case "3":
        listarTime();
        break;
      case "4":
        calcularPontuacaoMedia();
        break;
      case "5":
        alert("Encerrando o programa.");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while (opcao !== "5");
}
menu();