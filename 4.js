//conversão
const tx_euro = 6.10;
const tx_dolar = 5.70;
const valor_reais = parseFloat(prompt("Digite o valor em reais (R$): "));
const valor_euro = valor_reais / tx_euro;
const valor_dolar = valor_reais / tx_dolar;
alert(`Valor em reais: R$ ${valor_reais.toFixed(2)}`);
alert(`Valor em euro: € ${valor_euro.toFixed(2)}`);
alert(`Valor em dólar: US$ ${valor_dolar.toFixed(2)}`);
