



//peso dividido por altura altura
function CalcularIMC (peso, altura){
    return peso / (altura*altura) 
}
//calculo de IMC  em função 
function ClassificarImc(imc){
    if(imc < 18.5){
        return `abaixo do peso`;
    } else if(imc >= 18.5 && imc <= 25){
        return `peso normal`;
    }else if (imc > 25 && imc <= 30){
        return `acima do peso`;
    }else if ( imc > 30 && imc <= 40){
        return `Obeso`;
    }else {
        return `obesidade grave`;
    }
}
//função principal onde vamos usar novas funcoes para adicionar ao calculo
(function main (){
    const peso = 106;
    const altura = 1.87;
    
    const imc = CalcularIMC(peso, altura);
    console.log (ClassificarImc(imc));
})();
//uma função que esta executando e sendo envocada sem usar o parametro main 
//  so fecharem() a propria função.

/*funções ainda são objetos que conseguimos manipular  quando damos console.log na função retorna 
 função: nome da função */