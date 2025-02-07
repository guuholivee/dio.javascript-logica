

/*Funcoes é um pequeno  quadrado de codigos onde determinamos a  funções e os parametros 
 podendo incrementar + de 1 parametro adicionando  , no parametro   */
    function incrementarJuros(valor, percentualJuros){
        const valorDAcrescimo = (percentualJuros /100) * valor;

        return valor + valorDAcrescimo;
    }

    console.log (incrementarJuros(100,10));
    console.log (incrementarJuros(100,20))