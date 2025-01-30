/* faça um programa para calcular o valor de uma viagem.

voce tera 5 variaveis . sendo elas:
 1- preço do etanol;
 2- preço da gasolina;
 3- o tipo de combustivel que esta no seu carro;
 4- gasto medio de combustivel do carro por km;
 5- distacia em km da viagem 

imprima no console o valor que será gasto para realizar esta viagem */

const oEtanol = 4.13;
const aGasolina = 6.14;
const gastokm = 10;
const aDistacia = 100;
const typoCombustivel = "gasolina"


const ConsumoGasolina = aDistacia / gastokm;
const ConsumoEtanol = aDistacia / gastokm;
const valorGastoG = ConsumoGasolina * aGasolina;
const valorGastoE = ConsumoEtanol * oEtanol;

if (typoCombustivel === "gasolina") {
    console.log(`o valor gasto de combustivel ${typoCombustivel} é de ${valorGastoG}`)
} else {
    console.log(`O valor gasto de combustivel ${typoCombustivel} é de ${valorGastoE}`)
}
