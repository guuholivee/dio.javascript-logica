


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



function CompararPessoa(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velha que a ${p2.nome} `);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que o ${p1.nome}`);
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}


const Gustavo = new pessoa(`Gustavo`, 27);
const Luana = new pessoa(`Luana`, 23);

CompararPessoa(Luana,Gustavo);