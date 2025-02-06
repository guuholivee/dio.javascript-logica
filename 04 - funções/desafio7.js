

function AplicarDesconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
} 
function AplicarJuros(valor, juros){
    return (valor + (valor*(juros/100)));
}

const preco = 100;
const formaDpagamento = 4

if (formaDpagamento === 1){
    console.log( AplicarDesconto(preco, 10)); 
 }else if(formaDpagamento === 2){
    console.log (AplicarDesconto(preco , 15));
 }else if (formaDpagamento === 3){
    console.log(preco)
 } else{
   console.log (AplicarJuros (preco , 10));
 }

 console.log(10/100);

 // aplicando a função diminuimos o codigo sem as conttas para juros ou desconto 
 //chamando a função juros ou desconto na formula aplicamos de maneira mais organizada
 