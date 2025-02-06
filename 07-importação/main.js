
    //importa o que esta sendo exportado na pasta funcoes auxiliares
const {gets, print}  = require (`./funcoes-auxiliares`);
 
const QuantidadeAlunos = gets() //tornar a procura por alunos dinamica
const NumerosSorteados = [];

for (let i = 0; i < QuantidadeAlunos ; i++) {
    const NumerosSorteado = gets();
    NumerosSorteados.push(NumerosSorteado);
    
}

let MaiorValor = 0;

 for (let i = 0; i < NumerosSorteados.length; i++) {
    const numeroSorteado = NumerosSorteados[i];
    if (numeroSorteado > MaiorValor) {
        MaiorValor = numeroSorteado;
    }
 }

 print (MaiorValor);
