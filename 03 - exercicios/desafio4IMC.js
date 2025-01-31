/* O IMC - indice de massa corporal é um criterio da organização de saude para dar uma indicação sobre 
a condição de peso de uma pessoa adulta.

formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto sua condição de acortdo com a tabela abaixo.

IMC  em adultos condição:
- abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obesidade grave;
*/

const oPeso = 65 ;
const aAltura = 1.70;

const imc = oPeso / (aAltura * aAltura);
console.log(imc)

if(imc < 18.5){
    console.log("abaixo do peso")
} else if(imc >= 18.5 && imc <= 25){
    console.log("peso normal")
}else if (imc > 25 && imc <= 30){
    console.log("acima do peso")
}else if ( imc > 30 && imc <= 40){
    console.log("Obeso")
}else {
    console.log("obesidade grave")
};
