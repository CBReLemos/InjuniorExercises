//simulador
let fila = [];
function exibirFila() {
  if (fila.length === 0) {
    alert("Fila vazia.");
  } else {
    let lista = "Fila de Atendimento:\n";
    for (let i = 0; i < fila.length; i++) {
      lista += `${i + 1}º - ${fila[i]}\n`;
    }
    alert(lista);
  }
}
let opcao;
do {
  exibirFila();
  opcao = prompt(
    "Menu:\n1 - Novo Cliente\n2 - Atender Cliente\n3 - Sair\nEscolha uma opção:"
  );
  switch (opcao) {
    case "1":
      const nome = prompt("Digite o nome do novo cliente:");
      if (nome.trim() !== "") {
        fila.push(nome.trim());
        alert(`${nome} foi adicionado à fila.`);
      } else {
        alert("Nome inválido.");
      }
      break;
    case "2":
      if (fila.length > 0) {
        const atendido = fila.shift();
        alert(`Atendendo: ${atendido}`);
      } else {
        alert("A fila está vazia.");
      }
      break;
    case "3":
      alert("Encerrando o programa.");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcao !== "3");
