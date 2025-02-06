/* Crie uma classe para representar carros.
 Os Carros possuem uma marca , uma cor e um gasto medio de combustivel por kilometro rodado.
 Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor
gasto em reais para realizar este percurso
*/




class carro{
    Marca;
    Cor;
    GastoKm;
    
     
    constructor(Marca, Cor, GastoKm){ //metodo
        this.Marca = Marca;
        this.Cor = Cor;  
        this.GastoKm = GastoKm;
    }


    CalculoDeGastoViagem(aDistanciaKM, oCombustivel){ //Metodos
        return aDistanciaKM * this.GastoKm * oCombustivel;
    }
}
//adicionar novos carros 
const polo = new carro ( `Volkswagen` , `preto` , 1/10.8);
const golf = new carro ( `Volkswagen` , `prata` , 1/15.5);

//mudar valor e a distancia
const oCombustivel = 6.14;
const aDistanciaKM = 100;


//chamar o metodo
console.log(`O gasto para a viagem de ${aDistanciaKM}km/h é de R$${polo.CalculoDeGastoViagem(aDistanciaKM,oCombustivel).toFixed(2)}`)

    










