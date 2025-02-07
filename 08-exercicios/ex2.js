/*faça um programa que receba N ( quantidade de numeros) e seus respectivos valores 
imprima o maior numero par e o menor numero impar.
exemplo:
    entrada:
        5
        3
        4
        1
        10
        8

    saida:
        Maior numero par:10
        menor numero impar :1 */
        const {gets, print} = require(`./funcoes-auxiliares-ex2.js`)

        const N = gets();
        let MaiorPar = null //quando eu nao sei o numero colocar null
        let MenorImpar= null

        for (let i = 0; i < N ; i++) {
           const numero = gets();
            
           
           if( numero % 2 === 0){
              if (MaiorPar === null || numero > MaiorPar){ //eu nao conheco ainda entao vai dar false
                MaiorPar = numero;
              } 
            }else{
                if (MenorImpar === null || numero < MenorImpar){
                    MenorImpar = numero;
                }

                
            }

        } 
        print(`Maior numero par : ${MaiorPar}`);
        print(`Menor numero impar: ${MenorImpar}`)