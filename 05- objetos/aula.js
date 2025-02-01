//objetos sao uma lista de coisas dentro da VARIAVEL

const pessoa ={
    nome :`Gustavo O Batista`,   //utilizar , em vez de ;
    idade: `27 `,
    peso : `100kg`,

    descrever: function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
};


const atributo = `idade`
console.log ( pessoa[`nome`]); 



/*
gustavo.altura = 1.87;
console.log(gustavo); //acrescentar dinamicamente dados ao objeto

delete gustavo.peso;
console.log(gustavo); //deletar dinamicamente dados ao objeto
 */

