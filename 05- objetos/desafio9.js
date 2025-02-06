/* Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos NOME,PESO E ALTURA.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC(IMC = peso / (altura*altura));
    Instancie uma pessoa chamada josé que tenha 70kg de peso e 1,75 de altura e peça ao jose para dizer o valor
 do seu IMC; */


 class pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura= altura;        
   }

   //Metodo Calculo IMC
   CalcularImc(){
    return  this.peso / (this.altura * this.altura);
   }

    //metodo classificação IMC
    ClassificarImc(imc = this.peso / (this.altura * this.altura)){
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
 };
    //adicionar pessoas
 const jose = new pessoas (`jose`, 70, 1.75);
 const Gustavo = new pessoas(`Gustavo`, 106, 1.87);

 console.log(Gustavo.CalcularImc());//valor do IMC
 console.log(Gustavo.ClassificarImc()); //Classificação de IMC