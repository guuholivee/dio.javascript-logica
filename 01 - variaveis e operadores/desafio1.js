/*faça um programa  para calcular  o valor  de uma viagem 

voce tera 3 variaveis. sendo elas :
1 - preço do combustivel;
2 - gasto medio  de combustivel do carro por km;
3 - distancia por km  da viagem;

imprima no console o valor que sera gasto  de combustivel para realizar essa  viagem.*/


const precoComb = 5.79;
const LitrosKm = 1;
const distKm = 100;

const litrosConsumidos = distKm / LitrosKm;


const valorGasto = litrosConsumidos * precoComb;
console.log(`O valor total de gasto é de : ${valorGasto.toFixed(2)}`)
// tofixed para arredondar 2 casas a direita 





 




