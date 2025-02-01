


//função escreva meu nome
    function EscrevaSeuNome (nome){
        return (`Seu nome é ${nome}`);
    }
    
    
   //função escreva minha idade com o return do nome
    function Aidade (idade){
        if (idade >=18){
            console.log(EscrevaSeuNome(`gustavo`)+ ` sou maior de idade`)
        }else{
            console.log(`menor de idade`)
        }
    }
    Aidade(27);
    //função sao pequenos problemas que consigo invocar quando quiser
    // posso juntar  uma função a outra somente utilizando o return na função em vez do console.log