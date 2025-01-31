/* Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
e a escolha da condição de pagamento.
Utilize ops codigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetue o calculo adequado.

codigo Condição de pagamento:
1- A vista debito, recebe 10% de desconto;
2- A vista no dinheiro ou pix, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes , preço normal de etiqueta mais juros de 10%;
*/
const preco = 100;
const formaDpagamento = 4

if (formaDpagamento === 1){
    console.log( preco - (preco * 10) / 100 ) 
 }else if(formaDpagamento === 2){
    console.log (preco - (preco * 15) / 100)
 }else if (formaDpagamento === 3){
    console.log(preco)
 } else{
   console.log (preco + (preco * 10) / 100)
 }