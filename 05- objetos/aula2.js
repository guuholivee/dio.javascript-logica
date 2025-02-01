//como dinamizar os objetos
//CHAMADAS ORIENTADAS A OBJETOS

//class é uma definição do que deveria ser 
class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }
    
    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

// como instancia uma pessoa nova na class
const Gustavo = new pessoa(`Gustavo`, 27);
const Luana = new  pessoa(`Luana`,23);


Luana.descrever(); // fazendo a chamada de descrever 
Gustavo.descrever();

console.log(Gustavo)