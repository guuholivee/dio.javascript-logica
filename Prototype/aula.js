/*const pessoa = {

    genero: 'masculino'
};/

const Gustavo = {
    nome:'Gustavo',
    idade: 27,
    __proto__ : pessoa //herdando a const pessoa 
}
console.log(Gustavo.genero)*/

class pessoa{

    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    falar(){
        console.log(`meu nome é :${this.nome}`)
    }
}

const gustavo = new pessoa ("gustavo",30)
const luana = new pessoa ("luana",23)


console.log(luana);
luana.falar();